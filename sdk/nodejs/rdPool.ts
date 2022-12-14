// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Use this resource to manage resource distribution pool records in UltraDNS
 *
 * ## Example Usage
 * ### Create RD pool record of type A (1)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as ultradns from "@pulumi/ultradns";
 *
 * const rdPool = new ultradns.RdPool("a", {
 *     order: "RANDOM",
 *     ownerName: "a",
 *     recordDatas: ["192.168.1.1"],
 *     recordType: "1",
 *     ttl: 120,
 *     zoneName: "example.com.",
 * });
 * ```
 * ### Create RD pool record of type AAAA (28)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as ultradns from "@pulumi/ultradns";
 *
 * const aaaa = new ultradns.RdPool("aaaa", {
 *     order: "ROUND_ROBIN",
 *     ownerName: "aaaa",
 *     recordDatas: ["2001:db8:85a3:0:0:8a2e:370:7334"],
 *     recordType: "AAAA",
 *     ttl: 120,
 *     zoneName: "example.com.",
 * });
 * ```
 *
 * ## Import
 *
 * Resource Distribution (RD) pool records can be imported by combining their `owner_name`, `zone_name`, and `record_type`, separated by a colon.<br/> Example `www.example.com.:example.com.:A (1)`. -> For import, the `owner_name` and `zone_name` must be a FQDN, and `record_type` should have the type as well as the corresponding number as shown in the example above. Exampleterraform
 *
 * ```sh
 *  $ pulumi import ultradns:index/rdPool:RdPool example "www.example.com.:example.com.:A (1)"
 * ```
 */
export class RdPool extends pulumi.CustomResource {
    /**
     * Get an existing RdPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RdPoolState, opts?: pulumi.CustomResourceOptions): RdPool {
        return new RdPool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ultradns:index/rdPool:RdPool';

    /**
     * Returns true if the given object is an instance of RdPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RdPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RdPool.__pulumiType;
    }

    /**
     * (String) An optional description of the RD pool.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * (String) The order of the records will be returned in. Valid values are `FIXED`, `RANDOM`, `ROUND_ROBIN`.
     */
    public readonly order!: pulumi.Output<string>;
    /**
     * (String) The domain name of the owner of the RRSet. Can be either a fully qualified domain name (FQDN) or a relative domain name. If provided as a FQDN, it must be contained within the zone name's FQDN.
     */
    public readonly ownerName!: pulumi.Output<string>;
    /**
     * (String List) The list of IPv4 or IPv6 addresses.
     */
    public readonly recordDatas!: pulumi.Output<string[]>;
    /**
     * (String) Must be formatted as the well-known resource record type (A or AAAA) or the corresponding number for the type (1 or 28).<br/>
     * Below are the supported resource record types with the corresponding number::<br/>
     * `A (1)`
     * `AAAA (28)`
     */
    public readonly recordType!: pulumi.Output<string>;
    /**
     * (Integer) The time to live (in seconds) for the record. Must be a value between 0 and 2147483647, inclusive.
     */
    public readonly ttl!: pulumi.Output<number | undefined>;
    /**
     * (String) Name of the zone.
     */
    public readonly zoneName!: pulumi.Output<string>;

    /**
     * Create a RdPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RdPoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RdPoolArgs | RdPoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RdPoolState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["order"] = state ? state.order : undefined;
            resourceInputs["ownerName"] = state ? state.ownerName : undefined;
            resourceInputs["recordDatas"] = state ? state.recordDatas : undefined;
            resourceInputs["recordType"] = state ? state.recordType : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
            resourceInputs["zoneName"] = state ? state.zoneName : undefined;
        } else {
            const args = argsOrState as RdPoolArgs | undefined;
            if ((!args || args.order === undefined) && !opts.urn) {
                throw new Error("Missing required property 'order'");
            }
            if ((!args || args.ownerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ownerName'");
            }
            if ((!args || args.recordDatas === undefined) && !opts.urn) {
                throw new Error("Missing required property 'recordDatas'");
            }
            if ((!args || args.recordType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'recordType'");
            }
            if ((!args || args.zoneName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["order"] = args ? args.order : undefined;
            resourceInputs["ownerName"] = args ? args.ownerName : undefined;
            resourceInputs["recordDatas"] = args ? args.recordDatas : undefined;
            resourceInputs["recordType"] = args ? args.recordType : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["zoneName"] = args ? args.zoneName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RdPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering RdPool resources.
 */
export interface RdPoolState {
    /**
     * (String) An optional description of the RD pool.
     */
    description?: pulumi.Input<string>;
    /**
     * (String) The order of the records will be returned in. Valid values are `FIXED`, `RANDOM`, `ROUND_ROBIN`.
     */
    order?: pulumi.Input<string>;
    /**
     * (String) The domain name of the owner of the RRSet. Can be either a fully qualified domain name (FQDN) or a relative domain name. If provided as a FQDN, it must be contained within the zone name's FQDN.
     */
    ownerName?: pulumi.Input<string>;
    /**
     * (String List) The list of IPv4 or IPv6 addresses.
     */
    recordDatas?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * (String) Must be formatted as the well-known resource record type (A or AAAA) or the corresponding number for the type (1 or 28).<br/>
     * Below are the supported resource record types with the corresponding number::<br/>
     * `A (1)`
     * `AAAA (28)`
     */
    recordType?: pulumi.Input<string>;
    /**
     * (Integer) The time to live (in seconds) for the record. Must be a value between 0 and 2147483647, inclusive.
     */
    ttl?: pulumi.Input<number>;
    /**
     * (String) Name of the zone.
     */
    zoneName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RdPool resource.
 */
export interface RdPoolArgs {
    /**
     * (String) An optional description of the RD pool.
     */
    description?: pulumi.Input<string>;
    /**
     * (String) The order of the records will be returned in. Valid values are `FIXED`, `RANDOM`, `ROUND_ROBIN`.
     */
    order: pulumi.Input<string>;
    /**
     * (String) The domain name of the owner of the RRSet. Can be either a fully qualified domain name (FQDN) or a relative domain name. If provided as a FQDN, it must be contained within the zone name's FQDN.
     */
    ownerName: pulumi.Input<string>;
    /**
     * (String List) The list of IPv4 or IPv6 addresses.
     */
    recordDatas: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * (String) Must be formatted as the well-known resource record type (A or AAAA) or the corresponding number for the type (1 or 28).<br/>
     * Below are the supported resource record types with the corresponding number::<br/>
     * `A (1)`
     * `AAAA (28)`
     */
    recordType: pulumi.Input<string>;
    /**
     * (Integer) The time to live (in seconds) for the record. Must be a value between 0 and 2147483647, inclusive.
     */
    ttl?: pulumi.Input<number>;
    /**
     * (String) Name of the zone.
     */
    zoneName: pulumi.Input<string>;
}
