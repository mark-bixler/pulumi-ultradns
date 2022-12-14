// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface DirPoolNoResponse {
    /**
     * (Boolean) Indicates whether or not “no response” is returned for all of the non-configured geographical territories and IP ranges. This can only be set to `true` if there is no entry for rdataInfo, with allNonConfigured is set to `true`. If this is set to true, then geoInfo (`geoGroupName` and `geoCodes` ) and ipInfo (`ipGroupName` and `ip`) are ignored. Default value set to `false`.
     */
    allNonConfigured?: pulumi.Input<boolean>;
    /**
     * (String List) The codes for the geographical territories that make up the “no response” group. Valid GEO codes.
     */
    geoCodes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * (String) The name for the “no response” GeoIP group.
     */
    geoGroupName?: pulumi.Input<string>;
    /**
     * (String) The name of the “no response” SourceIP group.
     */
    ipGroupName?: pulumi.Input<string>;
    /**
     * (Block Set) List of nested blocks describing the IP addresses and IP range for the “no response” SourceIP group. The structure of this block is described below.
     */
    ips?: pulumi.Input<pulumi.Input<inputs.DirPoolNoResponseIp>[]>;
}

export interface DirPoolNoResponseIp {
    /**
     * (String) A single IPv4 or IPv6 address. If `address` is present, the `start`, `end`, and `CIDR` cannot be present.
     */
    address?: pulumi.Input<string>;
    /**
     * (String) The CIDR format (IPv4 or IPv6) for an IP address range. If `cidr` is present, the `start`, `end`, and `address` cannot be present.
     */
    cidr?: pulumi.Input<string>;
    /**
     * (String) The ending IP address (IPv4 or IPv6). If the end value is present, the start value must be present as well. `cidr` and `address` cannot be present.
     */
    end?: pulumi.Input<string>;
    /**
     * (String) The starting IP address (IPv4 or IPv6). If the start value is present, the end value must be present as well. `Cidr` and `address` cannot be present.
     */
    start?: pulumi.Input<string>;
}

export interface DirPoolRdataInfo {
    /**
     * (Boolean) Indicates whether or not the associated rdata is used for all of the non-configured geographical territories and SourceIP ranges. At most, one entry in rdataInfo can have this set to true. If this is set to true, then geoInfo (`geoGroupName` and `geoCodes` ) and ipInfo (`ipGroupName` and `ip`) are ignored. Default value set to `false`.
     */
    allNonConfigured?: pulumi.Input<boolean>;
    /**
     * (String List) The codes for the geographical territories that make up this group. Valid GEO codes.
     */
    geoCodes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * (String) The name of the GeoIP group.
     */
    geoGroupName?: pulumi.Input<string>;
    /**
     * (String) The name of the SourceIP group.
     */
    ipGroupName?: pulumi.Input<string>;
    /**
     * (Block Set) List of nested blocks describing the IP addresses and IP ranges this SourceIP group contains. The structure of this block is described below.
     */
    ips?: pulumi.Input<pulumi.Input<inputs.DirPoolRdataInfoIp>[]>;
    /**
     * (String) The IPv4/IPv6 address, CNAME, MX, TXT, or SRV format data.
     */
    rdata: pulumi.Input<string>;
    /**
     * (Integer) The time to live (in seconds) for the corresponding record in rdata. Must be a value between 0 and 2147483647, inclusive.
     */
    ttl?: pulumi.Input<number>;
    /**
     * (String) The type for the specified pool record.
     */
    type?: pulumi.Input<string>;
}

export interface DirPoolRdataInfoIp {
    /**
     * (String) A single IPv4 or IPv6 address. If `address` is present, the `start`, `end`, and `CIDR` cannot be present.
     */
    address?: pulumi.Input<string>;
    /**
     * (String) The CIDR format (IPv4 or IPv6) for an IP address range. If `cidr` is present, the `start`, `end`, and `address` cannot be present.
     */
    cidr?: pulumi.Input<string>;
    /**
     * (String) The ending IP address (IPv4 or IPv6). If the end value is present, the start value must be present as well. `cidr` and `address` cannot be present.
     */
    end?: pulumi.Input<string>;
    /**
     * (String) The starting IP address (IPv4 or IPv6). If the start value is present, the end value must be present as well. `Cidr` and `address` cannot be present.
     */
    start?: pulumi.Input<string>;
}

export interface SbPoolBackupRecord {
    /**
     * (Boolean) Indicates whether the pool's backup record is active and available to serve records.
     */
    availableToServe?: pulumi.Input<boolean>;
    /**
     * (Integer) Specifies the time, between 0 – 30 minutes, that SiteBacker waits after detecting that the pool record has failed, prior to activating the primary records. Default value set to 0.
     */
    failoverDelay?: pulumi.Input<number>;
    /**
     * (String) The IPv4 address or CNAME for the backup record.
     */
    rdata: pulumi.Input<string>;
}

export interface SbPoolRdataInfo {
    /**
     * (Boolean) Indicates whether the pool record is active and available to serve records.
     */
    availableToServe?: pulumi.Input<boolean>;
    /**
     * (Integer) Specifies the time, between 0 – 30 minutes, that SiteBacker waits after detecting that the pool record has failed, prior to activating the secondary records. Default value set to 0.
     */
    failoverDelay?: pulumi.Input<number>;
    /**
     * (Integer) Indicates the serving preference for this pool record.
     */
    priority: pulumi.Input<number>;
    /**
     * (String) The IPv4 address or CNAME.
     */
    rdata: pulumi.Input<string>;
    /**
     * (Boolean) Indicates whether or not probes are run for this pool record. Default value set to true.
     */
    runProbes?: pulumi.Input<boolean>;
    /**
     * (String) The current state of the pool record. Valid values are `NORMAL`, `ACTIVE`, and `INACTIVE`. Default value set to `NORMAL`.
     */
    state?: pulumi.Input<string>;
    /**
     * (Integer) Specifies how many probes must agree before the record state is changed. Default value set to 1.
     */
    threshold?: pulumi.Input<number>;
}

export interface SfPoolBackupRecord {
    /**
     * (String) An optional description for the backup record.
     */
    description?: pulumi.Input<string>;
    /**
     * (String) An IPv4 address or IPv6 address as a backup record.
     */
    rdata: pulumi.Input<string>;
}

export interface SfPoolMonitor {
    /**
     * (String) HTTP method used to connect to the monitored URL. Valid values are `GET`, `POST`.
     */
    method: pulumi.Input<string>;
    /**
     * (String) A string that is checked against the returned data from the request. The monitor fails if the searchString is not present.
     */
    searchString?: pulumi.Input<string>;
    /**
     * (String) If a monitor is sending a POST, this is the data sent as the body of the request.
     */
    transmittedData?: pulumi.Input<string>;
    /**
     * (String) Monitored URL. A full URL including the protocol, host, and URI. Valid protocols are HTTP and HTTPS.
     */
    url: pulumi.Input<string>;
}

export interface SlbPoolAllFailRecord {
    /**
     * (String) An optional description for the backup record.
     */
    description?: pulumi.Input<string>;
    /**
     * (String) An IPv4 or IPv6 address as a backup record.
     */
    rdata: pulumi.Input<string>;
    /**
     * (Boolean) Serving status of the AllFail Record.
     */
    serving?: pulumi.Input<boolean>;
}

export interface SlbPoolMonitor {
    /**
     * (String) HTTP method used to connect to the monitored URL. Valid values are `GET`, and `POST`.
     */
    method: pulumi.Input<string>;
    /**
     * (String) A string that is checked against the returned data from the request. The monitor fails if the search string is not present.
     */
    searchString?: pulumi.Input<string>;
    /**
     * (String) If a monitor is sending a POST, this is the data sent as the body of the request.
     */
    transmittedData?: pulumi.Input<string>;
    /**
     * (String) Monitored URL. A full URL including the protocol, host, and URI. Valid protocols are HTTP and HTTPS.
     */
    url: pulumi.Input<string>;
}

export interface SlbPoolRdataInfo {
    /**
     * (Boolean) Indicates whether the record is available to be served (true) or not (false), based upon the probe results or the forced state of the record.
     */
    availableToServe?: pulumi.Input<boolean>;
    /**
     * (String) An optional description of the record in the live pool.
     */
    description?: pulumi.Input<string>;
    /**
     * (String) The Forced State of the record that indicates whether the record needs to be: force served, forced to be inactive, or the force status not being considered (monitoring result decides the record state). Valid values are `FORCED_ACTIVE`, `FORCED_INACTIVE`, or `NOT_FORCED`. Default value set to `NOT_FORCED`.
     */
    forcedState?: pulumi.Input<string>;
    /**
     * (Boolean) Can be set at the record level to indicate whether probing is required (true) or not (false) for the given record. Default value set to true.
     */
    probingEnabled?: pulumi.Input<boolean>;
    /**
     * (String) An IPv4 address or IPv6 address.
     */
    rdata: pulumi.Input<string>;
}

export interface TcPoolBackupRecord {
    /**
     * (Boolean) Indicates whether the pool's backup record is active and available to serve records.
     */
    availableToServe?: pulumi.Input<boolean>;
    /**
     * (Integer) Specifies the time, between 0 – 30 minutes, that the Traffic Controller waits after detecting that the pool record has failed, prior to activating the primary records. Default value set to 0.
     */
    failoverDelay?: pulumi.Input<number>;
    /**
     * (String) The IPv4 address or CNAME for the backup record.
     */
    rdata: pulumi.Input<string>;
}

export interface TcPoolRdataInfo {
    /**
     * (Boolean) Indicates whether the pool record is active and available to serve records.
     */
    availableToServe?: pulumi.Input<boolean>;
    /**
     * (Integer) Specifies the time, between 0 – 30 minutes, that the Traffic Controller waits after detecting that the pool record has failed, prior to activating the secondary records. Default value set to 0.
     */
    failoverDelay?: pulumi.Input<number>;
    /**
     * (Integer) Indicates the serving preference for this pool record.
     */
    priority: pulumi.Input<number>;
    /**
     * (String) The IPv4 address or CNAME.
     */
    rdata: pulumi.Input<string>;
    /**
     * (Boolean) Indicates whether or not probes are run for this pool record. Default value set to true.
     */
    runProbes?: pulumi.Input<boolean>;
    /**
     * (String) The current state of the pool record. Valid values are `NORMAL`, `ACTIVE`, and `INACTIVE`. Default value set to `NORMAL`.
     */
    state?: pulumi.Input<string>;
    /**
     * (Integer) Specifies how many probes must agree before the record state is changed. Default value set to 1.
     */
    threshold?: pulumi.Input<number>;
    /**
     * (Integer) Determines the traffic load to send to each server in the Traffic Controller pool. Even integers from 2 to 100. Default value set to 2.
     */
    weight?: pulumi.Input<number>;
}

export interface ZoneAliasCreateInfo {
    /**
     * (String) The name of the zone being aliased. The existing zone must be owned by the same account as the new zone.
     */
    originalZoneName: pulumi.Input<string>;
}

export interface ZonePrimaryCreateInfo {
    /**
     * (String) Indicates the method for creating the primary zone. Valid values are `NEW`, `COPY`, `TRANSFER`.
     */
    createType: pulumi.Input<string>;
    /**
     * (Boolean) Indicates whether or not to move existing records from zones into this new zone. Default value set to false.
     */
    forceImport?: pulumi.Input<boolean>;
    /**
     * (String) Defines whether this zone should inherit the zone transfer values from the Account, and also specifies which values to inherit. Valid values are `ALL`, `NONE`, any combination of `IP_RANGE`, `NOTIFY_IP`, `TSIG`. Separate multiple values with a comma.<br/>
     * Example: `IP_RANGE, NOTIFY_IP`
     */
    inherit?: pulumi.Input<string>;
    /**
     * (Block Set, Max: 1) Nested block describing the Primary zone's name server. It needs to be provided if `createType` is `TRANSFER`.
     */
    nameServer?: pulumi.Input<inputs.ZonePrimaryCreateInfoNameServer>;
    /**
     * (Block Set) Nested block describing the addresses that are notified when updates are made to the primary zone. The structure of this block is described below.
     */
    notifyAddresses?: pulumi.Input<pulumi.Input<inputs.ZonePrimaryCreateInfoNotifyAddress>[]>;
    /**
     * (String) The name of the zone being copied. The existing zone must be owned by the same account as the new zone. It needs to be provided if `createType` is `COPY`.
     */
    originalZoneName?: pulumi.Input<string>;
    /**
     * (Block Set) Nested block describing the list of IPv4 or IPv6 ranges that are allowed to transfer primary zones out using zone transfer protocol (AXFR/IXFR). The structure of this block is described below.
     */
    restrictIps?: pulumi.Input<pulumi.Input<inputs.ZonePrimaryCreateInfoRestrictIp>[]>;
    /**
     * (Block Set, Max: 1) Nested block describing the TSIG information for the primary zone. The structure of this block is described below.
     */
    tsig?: pulumi.Input<inputs.ZonePrimaryCreateInfoTsig>;
}

export interface ZonePrimaryCreateInfoNameServer {
    /**
     * (String) The IPv4 or IPv6 address of the primary name server for the source zone.
     */
    ip: pulumi.Input<string>;
    /**
     * (String) The hash algorithm used to generate the TSIG key. Valid values are `hmac-md5`, `hmac-sha1`, `hmac-sha224`, `hmac-sha256`, `hmac-sha384`, `hmac-sha512`.
     */
    tsigAlgorithm?: pulumi.Input<string>;
    /**
     * (String) If TSIG is enabled for this name server, the name of the TSIG key.
     */
    tsigKey?: pulumi.Input<string>;
    /**
     * (String) If TSIG is enabled for this name server, the TSIG key’s value.
     */
    tsigKeyValue?: pulumi.Input<string>;
}

export interface ZonePrimaryCreateInfoNotifyAddress {
    /**
     * (String) A description of this IP Address.
     */
    description?: pulumi.Input<string>;
    /**
     * (String) The IPv4 Address that is notified when the primary zone is updated.
     */
    notifyAddress: pulumi.Input<string>;
}

export interface ZonePrimaryCreateInfoRestrictIp {
    /**
     * (String) The IP Address ranges specified in CIDR.
     */
    cidr?: pulumi.Input<string>;
    /**
     * (String) A description of this range of IP addresses.
     */
    comment?: pulumi.Input<string>;
    /**
     * (String) The end of the IPv4 or IPv6 range that is allowed to transfer this primary zone out using zone transfer protocol.
     */
    endIp?: pulumi.Input<string>;
    /**
     * (String) The IPv4 or IPv6 address that is allowed to transfer this primary zone out using zone transfer protocol.
     */
    singleIp?: pulumi.Input<string>;
    /**
     * (String) The start of the IPv4 or IPv6 range that is allowed to transfer this primary zone out using zone transfer protocol.
     */
    startIp?: pulumi.Input<string>;
}

export interface ZonePrimaryCreateInfoTsig {
    /**
     * (String) A description of this key.
     */
    description?: pulumi.Input<string>;
    /**
     * (String) The hash algorithm used to generate the TSIG key. Valid values are `hmac-md5`, `hmac-sha1`, `hmac-sha224`, `hmac-sha256`, `hmac-sha384`, `hmac-sha512`.
     */
    tsigAlgorithm: pulumi.Input<string>;
    /**
     * (String) The name of the TSIG key for the zone.
     */
    tsigKeyName: pulumi.Input<string>;
    /**
     * (String) The value of the TSIG key for the zone.
     */
    tsigKeyValue: pulumi.Input<string>;
}

export interface ZoneRegistrarInfo {
    /**
     * (Computed) (Block Set)  Nested block describing the name servers configuration of the zone. The structure of this block is described below.
     */
    nameServers?: pulumi.Input<pulumi.Input<inputs.ZoneRegistrarInfoNameServer>[]>;
    /**
     * (Computed) (String) The name of the domain registrar.
     */
    registrar?: pulumi.Input<string>;
    /**
     * (Computed) (String) The date  (`yyyy-MM-dd HH:mm:ss.S`) when the domain name registration expires.<br/>
     * Example: `2022-08-17 03:59:59.0`.
     */
    whoIsExpiration?: pulumi.Input<string>;
}

export interface ZoneRegistrarInfoNameServer {
    /**
     * (Computed) (List String) List of any obsolete UltraDNS name servers that are still configured for this zone.
     */
    incorrects?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * (Computed) (List String) List of UltraDNS name servers that should be configured for this domain, but are not.
     */
    missings?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * (Computed) (List String) List of UltraDNS name servers that are configured for this domain.
     */
    oks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * (Computed) (List String) List of name servers that are configured for this domain, but are not UltraDNS managed name servers.
     */
    unknowns?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ZoneSecondaryCreateInfo {
    /**
     * (String) The Notification Email for a secondary zone.
     */
    notificationEmailAddress?: pulumi.Input<string>;
    /**
     * (Block Set) The structure of this block follows the same structure as the `nameServer` block described above. It is the info of primary name server.
     */
    primaryNameServer1: pulumi.Input<inputs.ZoneSecondaryCreateInfoPrimaryNameServer1>;
    /**
     * (Block Set) The structure of this block follows the same structure as the `nameServer` block described above. It is the info of first backup primary name server.
     */
    primaryNameServer2?: pulumi.Input<inputs.ZoneSecondaryCreateInfoPrimaryNameServer2>;
    /**
     * (Block Set) The structure of this block follows the same structure as the `nameServer` block described above. It is the info of second backup primary name server.
     */
    primaryNameServer3?: pulumi.Input<inputs.ZoneSecondaryCreateInfoPrimaryNameServer3>;
}

export interface ZoneSecondaryCreateInfoPrimaryNameServer1 {
    /**
     * (String) The IPv4 or IPv6 address of the primary name server for the source zone.
     */
    ip: pulumi.Input<string>;
    /**
     * (String) The hash algorithm used to generate the TSIG key. Valid values are `hmac-md5`, `hmac-sha1`, `hmac-sha224`, `hmac-sha256`, `hmac-sha384`, `hmac-sha512`.
     */
    tsigAlgorithm?: pulumi.Input<string>;
    /**
     * (String) If TSIG is enabled for this name server, the name of the TSIG key.
     */
    tsigKey?: pulumi.Input<string>;
    /**
     * (String) If TSIG is enabled for this name server, the TSIG key’s value.
     */
    tsigKeyValue?: pulumi.Input<string>;
}

export interface ZoneSecondaryCreateInfoPrimaryNameServer2 {
    /**
     * (String) The IPv4 or IPv6 address of the primary name server for the source zone.
     */
    ip: pulumi.Input<string>;
    /**
     * (String) The hash algorithm used to generate the TSIG key. Valid values are `hmac-md5`, `hmac-sha1`, `hmac-sha224`, `hmac-sha256`, `hmac-sha384`, `hmac-sha512`.
     */
    tsigAlgorithm?: pulumi.Input<string>;
    /**
     * (String) If TSIG is enabled for this name server, the name of the TSIG key.
     */
    tsigKey?: pulumi.Input<string>;
    /**
     * (String) If TSIG is enabled for this name server, the TSIG key’s value.
     */
    tsigKeyValue?: pulumi.Input<string>;
}

export interface ZoneSecondaryCreateInfoPrimaryNameServer3 {
    /**
     * (String) The IPv4 or IPv6 address of the primary name server for the source zone.
     */
    ip: pulumi.Input<string>;
    /**
     * (String) The hash algorithm used to generate the TSIG key. Valid values are `hmac-md5`, `hmac-sha1`, `hmac-sha224`, `hmac-sha256`, `hmac-sha384`, `hmac-sha512`.
     */
    tsigAlgorithm?: pulumi.Input<string>;
    /**
     * (String) If TSIG is enabled for this name server, the name of the TSIG key.
     */
    tsigKey?: pulumi.Input<string>;
    /**
     * (String) If TSIG is enabled for this name server, the TSIG key’s value.
     */
    tsigKeyValue?: pulumi.Input<string>;
}

export interface ZoneTransferStatusDetails {
    /**
     * (Computed) (String) Displays the date (`MM/dd/yy HH:mm:ss tt vvv`) when the last transfer attempt or refresh was.<br/>
     * Example: `03/18/21 10:20:34 AM GMT`.
     */
    lastRefresh?: pulumi.Input<string>;
    /**
     * (Computed) (String) Displays the status of the last transfer that was attempted. Valid values are `IN_PROGRESS`, `FAILED`, `SUCCESSFUL`.
     */
    lastRefreshStatus?: pulumi.Input<string>;
    /**
     * (Computed) (String) Displays the last transfer’s status message. This is currently shown as failure reason.
     */
    lastRefreshStatusMessage?: pulumi.Input<string>;
    /**
     * (Computed) (String) Displays the date (`MM/dd/yy HH:mm:ss tt vvv`) when the next transfer attempt or refresh is.<br/>
     * Example: `03/18/21 10:20:34 AM GMT`.
     */
    nextRefresh?: pulumi.Input<string>;
}

