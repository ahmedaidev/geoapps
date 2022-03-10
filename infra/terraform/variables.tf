variable "image_name" {
  type    = string
  default = "ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"
}

variable "instance_type" {
  type    = string
  default = "t2.medium"
}

variable "workflow_id" {
  type = string
}

variable "enable_blue_env" {
  description = "Enable blue environment"
  type        = bool
  default     = true
}

variable "enable_green_env" {
  description = "Enable green environment"
  type        = bool
  default     = false
}

variable "switch" {
  type    = string
  default = "blue"
}
