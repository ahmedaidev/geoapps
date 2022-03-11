resource "aws_instance" "blue" {
  count                       = var.enable_blue_env ? var.blue_instance_count : 0
  ami                         = data.aws_ami.latest_ubuntu_image.id
  instance_type               = "t2.medium"
  key_name                    = "udacity"
  subnet_id                   = module.vpc.public_subnets[count.index % length(module.vpc.public_subnets)]
  vpc_security_group_ids      = [aws_security_group.geoapp_sg.id]
  associate_public_ip_address = true
  root_block_device {
    delete_on_termination = true
    volume_size           = 20
  }
  tags = {
    Name : "blue_${var.workflow_id}"
    Env : "blue"
  }
}

resource "aws_lb_target_group" "blue" {
  name     = "blue-tg-${var.workflow_id}-lb"
  port     = 80
  protocol = "HTTP"
  vpc_id   = module.vpc.vpc_id

  health_check {
    port     = 80
    protocol = "HTTP"
    timeout  = 5
    interval = 10
  }
}

resource "aws_lb_target_group_attachment" "blue" {
  count            = length(aws_instance.blue)
  target_group_arn = aws_lb_target_group.blue.arn
  target_id        = aws_instance.blue[count.index].id
  port             = 80
}