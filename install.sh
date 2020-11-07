#!/bin/sh
sudo sed -i -e '$ajenkins ALL=(ALL) NOPASSWD: ALL' /etc/sudoers
