#!/usr/bin/env bash

set -e

host='localhost'
port='5431'
username='postgres'
database='task_board'

export PGPASSWORD=example

found_database=`psql -h "${host}" -p "${port}" -U "${username}" -l | grep "${database}"`
if [ -n "${found_database}" ]; then
  psql -h "${host}" -p "${port}" -U "${username}" -c "drop database ${database};"
fi
psql -h "${host}" -p "${port}" -U "${username}" -c "create database ${database};"
psql -h "${host}" -p "${port}" -U "${username}" -d "${database}" -f ./bin/database-schema.sql
