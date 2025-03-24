#!/bin/bash

eval "$(ssh-agent -s)"
ssh-add ~/Desktop/sshkeys/do_github
echo "Soon prompting..."


