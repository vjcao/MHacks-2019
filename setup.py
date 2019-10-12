"""
depict python package configuration.

auschoi
shangbol
sungraek
vjcao

"""

from setuptools import setup

setup(
    name='depict',
    version='0.1',
    packages=['depict'],
    include_package_data=True,
    install_requires=[
        'Flask==1.1.1',
        'nodeenv==1.3.3',
        'requests==2.22.0',
    ],
)
