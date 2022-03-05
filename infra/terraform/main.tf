provider "aws" {
  region  = "eu-central-1"
}

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
    key_name = "aws-key-pair"

    tags = {
        Name: "${var.env_prefix}-geoapp-server"
    }
}
