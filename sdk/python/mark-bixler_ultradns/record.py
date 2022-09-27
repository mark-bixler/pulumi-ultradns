# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities

__all__ = ['RecordArgs', 'Record']

@pulumi.input_type
class RecordArgs:
    def __init__(__self__, *,
                 owner_name: pulumi.Input[str],
                 record_datas: pulumi.Input[Sequence[pulumi.Input[str]]],
                 record_type: pulumi.Input[str],
                 zone_name: pulumi.Input[str],
                 ttl: Optional[pulumi.Input[int]] = None):
        """
        The set of arguments for constructing a Record resource.
        :param pulumi.Input[str] owner_name: (String) The domain name of the owner of the RRSet. Can be either a fully qualified domain name (FQDN) or a relative domain name. If provided as a FQDN, it must be contained within the zone name's FQDN.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] record_datas: (String List) The data for the record displayed as the BIND presentation format for the specified RRTYPE.<br/>
               Example : For a SRV record, the format of data is ["priority weight port target"] (["2 2 523 example.com."])<br/>
               Additionally for MX, CNAME, and PTR record types, the data value must be a FQDN, as it cannot be relative to the zone name.<br/>
        :param pulumi.Input[str] record_type: (String) Must be formatted as the well-known resource record type (A, AAAA, TXT, etc.) or the corresponding number for the type; between 1 and 65535.<br/>
               Below are the supported resource record types with the corresponding number:<br/>
               `A (1)`
               `NS (2)`
               `CNAME (5)`
               `PTR (12)`
               `MX (15)`
               `TXT (16)`
               `AAAA (28)`
               `SRV (33)`
               `SSHFP (44)`
               `APEXALIAS (65282)`
        :param pulumi.Input[str] zone_name: (String) Name of the zone.
        :param pulumi.Input[int] ttl: (Integer) The time to live (in seconds) for the record. Must be a value between 0 and 2147483647, inclusive.
        """
        pulumi.set(__self__, "owner_name", owner_name)
        pulumi.set(__self__, "record_datas", record_datas)
        pulumi.set(__self__, "record_type", record_type)
        pulumi.set(__self__, "zone_name", zone_name)
        if ttl is not None:
            pulumi.set(__self__, "ttl", ttl)

    @property
    @pulumi.getter(name="ownerName")
    def owner_name(self) -> pulumi.Input[str]:
        """
        (String) The domain name of the owner of the RRSet. Can be either a fully qualified domain name (FQDN) or a relative domain name. If provided as a FQDN, it must be contained within the zone name's FQDN.
        """
        return pulumi.get(self, "owner_name")

    @owner_name.setter
    def owner_name(self, value: pulumi.Input[str]):
        pulumi.set(self, "owner_name", value)

    @property
    @pulumi.getter(name="recordDatas")
    def record_datas(self) -> pulumi.Input[Sequence[pulumi.Input[str]]]:
        """
        (String List) The data for the record displayed as the BIND presentation format for the specified RRTYPE.<br/>
        Example : For a SRV record, the format of data is ["priority weight port target"] (["2 2 523 example.com."])<br/>
        Additionally for MX, CNAME, and PTR record types, the data value must be a FQDN, as it cannot be relative to the zone name.<br/>
        """
        return pulumi.get(self, "record_datas")

    @record_datas.setter
    def record_datas(self, value: pulumi.Input[Sequence[pulumi.Input[str]]]):
        pulumi.set(self, "record_datas", value)

    @property
    @pulumi.getter(name="recordType")
    def record_type(self) -> pulumi.Input[str]:
        """
        (String) Must be formatted as the well-known resource record type (A, AAAA, TXT, etc.) or the corresponding number for the type; between 1 and 65535.<br/>
        Below are the supported resource record types with the corresponding number:<br/>
        `A (1)`
        `NS (2)`
        `CNAME (5)`
        `PTR (12)`
        `MX (15)`
        `TXT (16)`
        `AAAA (28)`
        `SRV (33)`
        `SSHFP (44)`
        `APEXALIAS (65282)`
        """
        return pulumi.get(self, "record_type")

    @record_type.setter
    def record_type(self, value: pulumi.Input[str]):
        pulumi.set(self, "record_type", value)

    @property
    @pulumi.getter(name="zoneName")
    def zone_name(self) -> pulumi.Input[str]:
        """
        (String) Name of the zone.
        """
        return pulumi.get(self, "zone_name")

    @zone_name.setter
    def zone_name(self, value: pulumi.Input[str]):
        pulumi.set(self, "zone_name", value)

    @property
    @pulumi.getter
    def ttl(self) -> Optional[pulumi.Input[int]]:
        """
        (Integer) The time to live (in seconds) for the record. Must be a value between 0 and 2147483647, inclusive.
        """
        return pulumi.get(self, "ttl")

    @ttl.setter
    def ttl(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "ttl", value)


@pulumi.input_type
class _RecordState:
    def __init__(__self__, *,
                 owner_name: Optional[pulumi.Input[str]] = None,
                 record_datas: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 record_type: Optional[pulumi.Input[str]] = None,
                 ttl: Optional[pulumi.Input[int]] = None,
                 zone_name: Optional[pulumi.Input[str]] = None):
        """
        Input properties used for looking up and filtering Record resources.
        :param pulumi.Input[str] owner_name: (String) The domain name of the owner of the RRSet. Can be either a fully qualified domain name (FQDN) or a relative domain name. If provided as a FQDN, it must be contained within the zone name's FQDN.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] record_datas: (String List) The data for the record displayed as the BIND presentation format for the specified RRTYPE.<br/>
               Example : For a SRV record, the format of data is ["priority weight port target"] (["2 2 523 example.com."])<br/>
               Additionally for MX, CNAME, and PTR record types, the data value must be a FQDN, as it cannot be relative to the zone name.<br/>
        :param pulumi.Input[str] record_type: (String) Must be formatted as the well-known resource record type (A, AAAA, TXT, etc.) or the corresponding number for the type; between 1 and 65535.<br/>
               Below are the supported resource record types with the corresponding number:<br/>
               `A (1)`
               `NS (2)`
               `CNAME (5)`
               `PTR (12)`
               `MX (15)`
               `TXT (16)`
               `AAAA (28)`
               `SRV (33)`
               `SSHFP (44)`
               `APEXALIAS (65282)`
        :param pulumi.Input[int] ttl: (Integer) The time to live (in seconds) for the record. Must be a value between 0 and 2147483647, inclusive.
        :param pulumi.Input[str] zone_name: (String) Name of the zone.
        """
        if owner_name is not None:
            pulumi.set(__self__, "owner_name", owner_name)
        if record_datas is not None:
            pulumi.set(__self__, "record_datas", record_datas)
        if record_type is not None:
            pulumi.set(__self__, "record_type", record_type)
        if ttl is not None:
            pulumi.set(__self__, "ttl", ttl)
        if zone_name is not None:
            pulumi.set(__self__, "zone_name", zone_name)

    @property
    @pulumi.getter(name="ownerName")
    def owner_name(self) -> Optional[pulumi.Input[str]]:
        """
        (String) The domain name of the owner of the RRSet. Can be either a fully qualified domain name (FQDN) or a relative domain name. If provided as a FQDN, it must be contained within the zone name's FQDN.
        """
        return pulumi.get(self, "owner_name")

    @owner_name.setter
    def owner_name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "owner_name", value)

    @property
    @pulumi.getter(name="recordDatas")
    def record_datas(self) -> Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]:
        """
        (String List) The data for the record displayed as the BIND presentation format for the specified RRTYPE.<br/>
        Example : For a SRV record, the format of data is ["priority weight port target"] (["2 2 523 example.com."])<br/>
        Additionally for MX, CNAME, and PTR record types, the data value must be a FQDN, as it cannot be relative to the zone name.<br/>
        """
        return pulumi.get(self, "record_datas")

    @record_datas.setter
    def record_datas(self, value: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]):
        pulumi.set(self, "record_datas", value)

    @property
    @pulumi.getter(name="recordType")
    def record_type(self) -> Optional[pulumi.Input[str]]:
        """
        (String) Must be formatted as the well-known resource record type (A, AAAA, TXT, etc.) or the corresponding number for the type; between 1 and 65535.<br/>
        Below are the supported resource record types with the corresponding number:<br/>
        `A (1)`
        `NS (2)`
        `CNAME (5)`
        `PTR (12)`
        `MX (15)`
        `TXT (16)`
        `AAAA (28)`
        `SRV (33)`
        `SSHFP (44)`
        `APEXALIAS (65282)`
        """
        return pulumi.get(self, "record_type")

    @record_type.setter
    def record_type(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "record_type", value)

    @property
    @pulumi.getter
    def ttl(self) -> Optional[pulumi.Input[int]]:
        """
        (Integer) The time to live (in seconds) for the record. Must be a value between 0 and 2147483647, inclusive.
        """
        return pulumi.get(self, "ttl")

    @ttl.setter
    def ttl(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "ttl", value)

    @property
    @pulumi.getter(name="zoneName")
    def zone_name(self) -> Optional[pulumi.Input[str]]:
        """
        (String) Name of the zone.
        """
        return pulumi.get(self, "zone_name")

    @zone_name.setter
    def zone_name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "zone_name", value)


class Record(pulumi.CustomResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 owner_name: Optional[pulumi.Input[str]] = None,
                 record_datas: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 record_type: Optional[pulumi.Input[str]] = None,
                 ttl: Optional[pulumi.Input[int]] = None,
                 zone_name: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        """
        Use this resource to manage standard DNS records in UltraDNS

        ## Example Usage
        ### Create DNS record of type A (1)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        record = ultradns.Record("record",
            owner_name="a",
            record_datas=["192.168.1.1"],
            record_type="1",
            ttl=120,
            zone_name="example.com.")
        ```
        ### Create DNS record of type NS (2)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        ns = ultradns.Record("ns",
            owner_name="example.com.",
            record_datas=[
                "ns11.sample.com.",
                "ns12.sample.com.",
            ],
            record_type="NS",
            ttl=120,
            zone_name="example.com.")
        ```
        ### Create DNS record of type CNAME (5)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        cname = ultradns.Record("cname",
            owner_name="cname",
            record_datas=["host.sample.com."],
            record_type="CNAME",
            ttl=120,
            zone_name="example.com.")
        ```
        ### Create DNS record of type PTR (12)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        ptr = ultradns.Record("ptr",
            owner_name="1",
            record_datas=["ns1.example.com."],
            record_type="12",
            ttl=120,
            zone_name="70.154.156.in-addr.arpa.")
        ```
        ### Create DNS record of type MX (15)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        mx = ultradns.Record("mx",
            owner_name="mx",
            record_datas=["2 example.com."],
            record_type="15",
            ttl=120,
            zone_name="example.com.")
        ```
        ### Create DNS record of type TXT (16)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        txt = ultradns.Record("txt",
            owner_name="txt",
            record_datas=["text data"],
            record_type="TXT",
            ttl=120,
            zone_name="example.com.")
        ```
        ### Create DNS record of type AAAA (28)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        aaaa = ultradns.Record("aaaa",
            owner_name="aaaa",
            record_datas=["2001:db8:85a3:0:0:8a2e:370:7334"],
            record_type="AAAA",
            ttl=120,
            zone_name="example.com.")
        ```
        ### Create DNS record of type SRV (33)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        srv = ultradns.Record("srv",
            owner_name="srv",
            record_datas=["5 6 7 example.com."],
            record_type="33",
            ttl=120,
            zone_name="example.com.")
        ```
        ### Create DNS record of type SSHFP (44)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        sshfp = ultradns.Record("sshfp",
            owner_name="sshfp",
            record_datas=["1 2 54B5E539EAF593AEA410F80737530B71CCDE8B6C3D241184A1372E98BC7EDB37"],
            record_type="SSHFP",
            ttl=120,
            zone_name="example.com.")
        ```
        ### Create DNS record of type APEXALIAS (65282)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        apex = ultradns.Record("apex",
            owner_name="example.com.",
            record_datas=["sample.com."],
            record_type="APEXALIAS",
            ttl=120,
            zone_name="example.com.")
        ```

        ## Import

        Records can be imported by combining their `owner_name`, `zone_name`, and `record_type`, separated by a colon.<br/> Example `www.example.com.:example.com.:A (1)`. -> For import, the `owner_name` and `zone_name` must be a FQDN, and `record_type` should have the type as well as the corresponding number as shown in the example below. Example

        ```sh
         $ pulumi import ultradns:index/record:Record example "www.example.com.:example.com.:A (1)"
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] owner_name: (String) The domain name of the owner of the RRSet. Can be either a fully qualified domain name (FQDN) or a relative domain name. If provided as a FQDN, it must be contained within the zone name's FQDN.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] record_datas: (String List) The data for the record displayed as the BIND presentation format for the specified RRTYPE.<br/>
               Example : For a SRV record, the format of data is ["priority weight port target"] (["2 2 523 example.com."])<br/>
               Additionally for MX, CNAME, and PTR record types, the data value must be a FQDN, as it cannot be relative to the zone name.<br/>
        :param pulumi.Input[str] record_type: (String) Must be formatted as the well-known resource record type (A, AAAA, TXT, etc.) or the corresponding number for the type; between 1 and 65535.<br/>
               Below are the supported resource record types with the corresponding number:<br/>
               `A (1)`
               `NS (2)`
               `CNAME (5)`
               `PTR (12)`
               `MX (15)`
               `TXT (16)`
               `AAAA (28)`
               `SRV (33)`
               `SSHFP (44)`
               `APEXALIAS (65282)`
        :param pulumi.Input[int] ttl: (Integer) The time to live (in seconds) for the record. Must be a value between 0 and 2147483647, inclusive.
        :param pulumi.Input[str] zone_name: (String) Name of the zone.
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: RecordArgs,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        Use this resource to manage standard DNS records in UltraDNS

        ## Example Usage
        ### Create DNS record of type A (1)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        record = ultradns.Record("record",
            owner_name="a",
            record_datas=["192.168.1.1"],
            record_type="1",
            ttl=120,
            zone_name="example.com.")
        ```
        ### Create DNS record of type NS (2)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        ns = ultradns.Record("ns",
            owner_name="example.com.",
            record_datas=[
                "ns11.sample.com.",
                "ns12.sample.com.",
            ],
            record_type="NS",
            ttl=120,
            zone_name="example.com.")
        ```
        ### Create DNS record of type CNAME (5)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        cname = ultradns.Record("cname",
            owner_name="cname",
            record_datas=["host.sample.com."],
            record_type="CNAME",
            ttl=120,
            zone_name="example.com.")
        ```
        ### Create DNS record of type PTR (12)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        ptr = ultradns.Record("ptr",
            owner_name="1",
            record_datas=["ns1.example.com."],
            record_type="12",
            ttl=120,
            zone_name="70.154.156.in-addr.arpa.")
        ```
        ### Create DNS record of type MX (15)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        mx = ultradns.Record("mx",
            owner_name="mx",
            record_datas=["2 example.com."],
            record_type="15",
            ttl=120,
            zone_name="example.com.")
        ```
        ### Create DNS record of type TXT (16)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        txt = ultradns.Record("txt",
            owner_name="txt",
            record_datas=["text data"],
            record_type="TXT",
            ttl=120,
            zone_name="example.com.")
        ```
        ### Create DNS record of type AAAA (28)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        aaaa = ultradns.Record("aaaa",
            owner_name="aaaa",
            record_datas=["2001:db8:85a3:0:0:8a2e:370:7334"],
            record_type="AAAA",
            ttl=120,
            zone_name="example.com.")
        ```
        ### Create DNS record of type SRV (33)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        srv = ultradns.Record("srv",
            owner_name="srv",
            record_datas=["5 6 7 example.com."],
            record_type="33",
            ttl=120,
            zone_name="example.com.")
        ```
        ### Create DNS record of type SSHFP (44)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        sshfp = ultradns.Record("sshfp",
            owner_name="sshfp",
            record_datas=["1 2 54B5E539EAF593AEA410F80737530B71CCDE8B6C3D241184A1372E98BC7EDB37"],
            record_type="SSHFP",
            ttl=120,
            zone_name="example.com.")
        ```
        ### Create DNS record of type APEXALIAS (65282)

        ```python
        import pulumi
        import mark-bixler_ultradns as ultradns

        apex = ultradns.Record("apex",
            owner_name="example.com.",
            record_datas=["sample.com."],
            record_type="APEXALIAS",
            ttl=120,
            zone_name="example.com.")
        ```

        ## Import

        Records can be imported by combining their `owner_name`, `zone_name`, and `record_type`, separated by a colon.<br/> Example `www.example.com.:example.com.:A (1)`. -> For import, the `owner_name` and `zone_name` must be a FQDN, and `record_type` should have the type as well as the corresponding number as shown in the example below. Example

        ```sh
         $ pulumi import ultradns:index/record:Record example "www.example.com.:example.com.:A (1)"
        ```

        :param str resource_name: The name of the resource.
        :param RecordArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(RecordArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 owner_name: Optional[pulumi.Input[str]] = None,
                 record_datas: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 record_type: Optional[pulumi.Input[str]] = None,
                 ttl: Optional[pulumi.Input[int]] = None,
                 zone_name: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        opts = pulumi.ResourceOptions.merge(_utilities.get_resource_opts_defaults(), opts)
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = RecordArgs.__new__(RecordArgs)

            if owner_name is None and not opts.urn:
                raise TypeError("Missing required property 'owner_name'")
            __props__.__dict__["owner_name"] = owner_name
            if record_datas is None and not opts.urn:
                raise TypeError("Missing required property 'record_datas'")
            __props__.__dict__["record_datas"] = record_datas
            if record_type is None and not opts.urn:
                raise TypeError("Missing required property 'record_type'")
            __props__.__dict__["record_type"] = record_type
            __props__.__dict__["ttl"] = ttl
            if zone_name is None and not opts.urn:
                raise TypeError("Missing required property 'zone_name'")
            __props__.__dict__["zone_name"] = zone_name
        super(Record, __self__).__init__(
            'ultradns:index/record:Record',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            owner_name: Optional[pulumi.Input[str]] = None,
            record_datas: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
            record_type: Optional[pulumi.Input[str]] = None,
            ttl: Optional[pulumi.Input[int]] = None,
            zone_name: Optional[pulumi.Input[str]] = None) -> 'Record':
        """
        Get an existing Record resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] owner_name: (String) The domain name of the owner of the RRSet. Can be either a fully qualified domain name (FQDN) or a relative domain name. If provided as a FQDN, it must be contained within the zone name's FQDN.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] record_datas: (String List) The data for the record displayed as the BIND presentation format for the specified RRTYPE.<br/>
               Example : For a SRV record, the format of data is ["priority weight port target"] (["2 2 523 example.com."])<br/>
               Additionally for MX, CNAME, and PTR record types, the data value must be a FQDN, as it cannot be relative to the zone name.<br/>
        :param pulumi.Input[str] record_type: (String) Must be formatted as the well-known resource record type (A, AAAA, TXT, etc.) or the corresponding number for the type; between 1 and 65535.<br/>
               Below are the supported resource record types with the corresponding number:<br/>
               `A (1)`
               `NS (2)`
               `CNAME (5)`
               `PTR (12)`
               `MX (15)`
               `TXT (16)`
               `AAAA (28)`
               `SRV (33)`
               `SSHFP (44)`
               `APEXALIAS (65282)`
        :param pulumi.Input[int] ttl: (Integer) The time to live (in seconds) for the record. Must be a value between 0 and 2147483647, inclusive.
        :param pulumi.Input[str] zone_name: (String) Name of the zone.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = _RecordState.__new__(_RecordState)

        __props__.__dict__["owner_name"] = owner_name
        __props__.__dict__["record_datas"] = record_datas
        __props__.__dict__["record_type"] = record_type
        __props__.__dict__["ttl"] = ttl
        __props__.__dict__["zone_name"] = zone_name
        return Record(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="ownerName")
    def owner_name(self) -> pulumi.Output[str]:
        """
        (String) The domain name of the owner of the RRSet. Can be either a fully qualified domain name (FQDN) or a relative domain name. If provided as a FQDN, it must be contained within the zone name's FQDN.
        """
        return pulumi.get(self, "owner_name")

    @property
    @pulumi.getter(name="recordDatas")
    def record_datas(self) -> pulumi.Output[Sequence[str]]:
        """
        (String List) The data for the record displayed as the BIND presentation format for the specified RRTYPE.<br/>
        Example : For a SRV record, the format of data is ["priority weight port target"] (["2 2 523 example.com."])<br/>
        Additionally for MX, CNAME, and PTR record types, the data value must be a FQDN, as it cannot be relative to the zone name.<br/>
        """
        return pulumi.get(self, "record_datas")

    @property
    @pulumi.getter(name="recordType")
    def record_type(self) -> pulumi.Output[str]:
        """
        (String) Must be formatted as the well-known resource record type (A, AAAA, TXT, etc.) or the corresponding number for the type; between 1 and 65535.<br/>
        Below are the supported resource record types with the corresponding number:<br/>
        `A (1)`
        `NS (2)`
        `CNAME (5)`
        `PTR (12)`
        `MX (15)`
        `TXT (16)`
        `AAAA (28)`
        `SRV (33)`
        `SSHFP (44)`
        `APEXALIAS (65282)`
        """
        return pulumi.get(self, "record_type")

    @property
    @pulumi.getter
    def ttl(self) -> pulumi.Output[Optional[int]]:
        """
        (Integer) The time to live (in seconds) for the record. Must be a value between 0 and 2147483647, inclusive.
        """
        return pulumi.get(self, "ttl")

    @property
    @pulumi.getter(name="zoneName")
    def zone_name(self) -> pulumi.Output[str]:
        """
        (String) Name of the zone.
        """
        return pulumi.get(self, "zone_name")
