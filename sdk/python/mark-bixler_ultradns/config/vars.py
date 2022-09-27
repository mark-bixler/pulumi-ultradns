# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from .. import _utilities

import types

__config__ = pulumi.Config('ultradns')


class _ExportableConfig(types.ModuleType):
    @property
    def hosturl(self) -> Optional[str]:
        """
        Host url for UltraDNS rest api.
        """
        return __config__.get('hosturl')

    @property
    def password(self) -> Optional[str]:
        """
        Password for UltraDNS rest api.
        """
        return __config__.get('password')

    @property
    def username(self) -> Optional[str]:
        """
        User name for UltraDNS rest api.
        """
        return __config__.get('username')
