provider "aws" {
  region  = "eu-central-1"
}

variable image_name {}
variable instance_type {}

data "aws_ami" "latest-ubuntu-image" {
    most_recent = true
    owners = ["099720109477"] # Canonical
    filter {
        name = "name"
        values = [var.image_name] 
    }
    filter {
        name = "virtualization-type"
        values = ["hvm"]
    }
}
resource "aws_instance" "geoapp-server" {
    ami = data.aws_ami.latest-ubuntu-image.id
    instance_type = var.instance_type

    associate_public_ip_address = true
    key_name = "udacity"

    root_block_device {
      delete_on_termination = true
      volume_size = 20
    }

    tags = {
        Name: "geoapp-server"
    }
}

data "aws_eip" "geoapp-eip" {
  public_ip = "18.157.61.46"
}

resource "aws_eip_association" "eip_assoc" {
  instance_id   = aws_instance.geoapp-server.id
  allocation_id = aws_eip.geoapp-eip.association_id
}

output instance_ip {
  value       = aws_instance.geoapp-server.public_ip
  description = "Instance public IP"
}
