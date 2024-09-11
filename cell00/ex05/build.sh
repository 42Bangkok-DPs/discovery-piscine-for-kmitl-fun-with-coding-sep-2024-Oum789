#!/bin/bash

if [ -z "$1" ]; then
  echo "No arguments supplied"
  exit 1
fi

for folder_name in "$@"; do
  mkdir "ex$folder_name"
done