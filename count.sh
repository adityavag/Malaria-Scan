#!/bin/sh
cloc --fullpath \
     --not-match-d='(node_modules|build|static|coverage|__tests__|tests)' \
     --exclude-list-file=notcount \
     --include-ext=jsx,js,json,html .
