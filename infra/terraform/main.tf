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

    tags = {
        Name: "${var.env_prefix}-geoapp-server"
    }
}
resource "aws_ebs_volume" "geoapp-volume" {
  availability_zone = aws_instance.geoapp-server.availability_zone
  size              = 20

  tags = {
    Name: "${var.env_prefix}-geoapp-volume"
  }
}
resource "aws_volume_attachment" "ebs_att" {
  device_name = "/dev/sdh"
  volume_id   = aws_ebs_volume.geoapp-volume.id
  instance_id = aws_instance.geoapp-server.id
}

resource "aws_eip" "geoapp-server-eip" {
  instance = aws_instance.geoapp-server.id
}

output instance_ip {
  value       = aws_eip.geoapp-server-eip.public_ip
  description = "Instance Elastic IP"
}
