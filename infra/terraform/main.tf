provider "aws" {
  region  = "eu-central-1"
}

variable env_prefix {}
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
      iops = 150
      volume_size = 50
      volume_type = "gp2"
    }

    tags = {
        Name: "${var.env_prefix}-geoapp-server"
    }
}

resource "aws_eip_association" "eip_assoc" {
  instance_id   = aws_instance.geoapp-server.id
  allocation_id = "eipalloc-0ceb3c6a9aaa4a295"
}

output instance_ip {
  value       = aws_instance.geoapp-server.public_ip
  description = "Instance public IP"
}
