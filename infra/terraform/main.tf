provider "aws" {
  region = "eu-central-1"
}

resource "aws_security_group" "geoapp_sg" {
  name        = "geoapp_sg"
  description = "Allow traffic to geoapp"

  ingress {
    description = "HTTPS Rule"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    description = "HTTP Rule"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    description = "SSH Rule"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "geoapp_sg"
  }
}


data "aws_ami" "latest_ubuntu_image" {
  most_recent = true
  owners      = ["099720109477"] # Canonical
  filter {
    name   = "name"
    values = [var.image_name]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

resource "aws_eip_association" "eip_assoc" {
  instance_id   = var.switch == "blue" ? aws_instance.geoapp_server_blue[0].id : aws_instance.geoapp_server_green[0].id
  allocation_id = "eipalloc-0ceb3c6a9aaa4a295"
}