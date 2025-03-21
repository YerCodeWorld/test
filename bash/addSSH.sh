#!/bin/bash

eval "$(ssh-agent -s)"
echo "Getting prompt..."
ssh-add ~/Desktop/sshkeys/do_github


