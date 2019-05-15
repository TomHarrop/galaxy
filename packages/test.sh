#!/bin/sh

set -e

# Change to packages directory.
cd "$(dirname "$0")"

TEST_PYTHON=${TEST_PYTHON:-"python"}
TEST_ENV_DIR=${TEST_ENV_DIR:-`mktemp -d -t gxpkgtestenvXXXXXX`}

virtualenv -p "$TEST_PYTHON" "$TEST_ENV_DIR"
. "${TEST_ENV_DIR}/bin/activate"
pip install pytest

# ensure ordered by dependency dag
PACKAGE_DIRS="
    util
    objectstore
    data
"

for package_dir in $PACKAGE_DIRS; do
    cd "$package_dir"
    python setup.py install
    pytest --doctest-modules galaxy tests
    cd ..
done
