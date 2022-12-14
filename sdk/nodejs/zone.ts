// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Use this resource to manage zones in UltraDNS
 *
 * ## Example Usage
 * ### Create Primary Zone
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as ultradns from "@pulumi/ultradns";
 *
 * const primary = new ultradns.Zone("primary", {
 *     accountName: "account",
 *     primaryCreateInfo: {
 *         createType: "NEW",
 *         notifyAddresses: [
 *             {
 *                 notifyAddress: "192.168.1.3",
 *             },
 *             {
 *                 notifyAddress: "192.168.1.4",
 *             },
 *         ],
 *         restrictIps: [
 *             {
 *                 singleIp: "192.168.1.1",
 *             },
 *             {
 *                 singleIp: "192.168.1.2",
 *             },
 *         ],
 *         tsig: {
 *             description: "description",
 *             tsigAlgorithm: "hmac-md5",
 *             tsigKeyName: "example.com.0.325349282751.key.",
 *             tsigKeyValue: "ZWFlY2U1MTBlRmM2Y0NGQ5MTlmYTdmZTE0Njc=",
 *         },
 *     },
 *     type: "PRIMARY",
 * });
 * ```
 * ### Create Secondary Zone
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as ultradns from "@pulumi/ultradns";
 *
 * const secondary = new ultradns.Zone("secondary", {
 *     accountName: "account",
 *     secondaryCreateInfo: {
 *         notificationEmailAddress: "test@example.com",
 *         primaryNameServer1: {
 *             ip: "192.168.1.1",
 *         },
 *     },
 *     type: "SECONDARY",
 * });
 * ```
 * ### Create Alias Zone
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as ultradns from "@pulumi/ultradns";
 *
 * const alias = new ultradns.Zone("alias", {
 *     accountName: "account",
 *     aliasCreateInfo: {
 *         originalZoneName: "ultradns.com.",
 *     },
 *     type: "ALIAS",
 * });
 * ```
 *
 * ## Import
 *
 * Zones can be imported using their name (must be a FQDN). Example
 *
 * ```sh
 *  $ pulumi import ultradns:index/zone:Zone example "example.com."
 * ```
 */
export class Zone extends pulumi.CustomResource {
    /**
     * Get an existing Zone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZoneState, opts?: pulumi.CustomResourceOptions): Zone {
        return new Zone(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ultradns:index/zone:Zone';

    /**
     * Returns true if the given object is an instance of Zone.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Zone {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Zone.__pulumiType;
    }

    /**
     * (String) 	Name of the account. It must be provided, but it can also be sourced from the `ULTRADNS_ACCOUNT` environment variable.
     */
    public readonly accountName!: pulumi.Output<string | undefined>;
    /**
     * (Block Set, Max: 1)
     * Nested block describing the info of alias zone. The structure of this block is described below.
     */
    public readonly aliasCreateInfo!: pulumi.Output<outputs.ZoneAliasCreateInfo | undefined>;
    /**
     * (String) This is used to provide comments on updates.
     */
    public readonly changeComment!: pulumi.Output<string | undefined>;
    /**
     * (Computed) (String) Whether or not the zone is signed with DNSSEC. Valid values are `SIGNED` or `UNSIGNED`.
     */
    public /*out*/ readonly dnssecStatus!: pulumi.Output<string>;
    /**
     * (Computed) (String) The last date and time the zone was modified, represented in ISO8601 format (`yyyy-MM-ddTHH:mmZ`).<br/>
     * Example: `2021-12-07T11:25Z`.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string>;
    /**
     * (String) Name of the zone.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * (Computed) (String) Name of the user that created the zone.
     */
    public /*out*/ readonly owner!: pulumi.Output<string>;
    /**
     * (Block Set, Max: 1) Nested block describing the info of primary zone. The structure of this block is described below.
     */
    public readonly primaryCreateInfo!: pulumi.Output<outputs.ZonePrimaryCreateInfo | undefined>;
    /**
     * (Computed) (Block Set) Nested block describing information about the name server configuration for this zone. The structure of this block is described below.
     */
    public readonly registrarInfo!: pulumi.Output<outputs.ZoneRegistrarInfo>;
    /**
     * (Computed) (Integer) Number of records in the zone.
     */
    public /*out*/ readonly resourceRecordCount!: pulumi.Output<number>;
    /**
     * (Block Set, Max: 1)
     * Nested block describing the info of secondary zone. The structure of this block is described below.
     */
    public readonly secondaryCreateInfo!: pulumi.Output<outputs.ZoneSecondaryCreateInfo | undefined>;
    /**
     * (Computed) (String) Display the status of the zone.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * (Computed) (Block Set) Nested block describing the zone transfer details. The structure of this block is described below.
     */
    public readonly transferStatusDetails!: pulumi.Output<outputs.ZoneTransferStatusDetails>;
    /**
     * (String) This is the type of zone. Valid values are `PRIMARY`, `SECONDARY` or `ALIAS`.
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a Zone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZoneArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ZoneArgs | ZoneState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ZoneState | undefined;
            resourceInputs["accountName"] = state ? state.accountName : undefined;
            resourceInputs["aliasCreateInfo"] = state ? state.aliasCreateInfo : undefined;
            resourceInputs["changeComment"] = state ? state.changeComment : undefined;
            resourceInputs["dnssecStatus"] = state ? state.dnssecStatus : undefined;
            resourceInputs["lastModifiedTime"] = state ? state.lastModifiedTime : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
            resourceInputs["primaryCreateInfo"] = state ? state.primaryCreateInfo : undefined;
            resourceInputs["registrarInfo"] = state ? state.registrarInfo : undefined;
            resourceInputs["resourceRecordCount"] = state ? state.resourceRecordCount : undefined;
            resourceInputs["secondaryCreateInfo"] = state ? state.secondaryCreateInfo : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["transferStatusDetails"] = state ? state.transferStatusDetails : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as ZoneArgs | undefined;
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["aliasCreateInfo"] = args ? args.aliasCreateInfo : undefined;
            resourceInputs["changeComment"] = args ? args.changeComment : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["primaryCreateInfo"] = args ? args.primaryCreateInfo : undefined;
            resourceInputs["registrarInfo"] = args ? args.registrarInfo : undefined;
            resourceInputs["secondaryCreateInfo"] = args ? args.secondaryCreateInfo : undefined;
            resourceInputs["transferStatusDetails"] = args ? args.transferStatusDetails : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["dnssecStatus"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["owner"] = undefined /*out*/;
            resourceInputs["resourceRecordCount"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Zone.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Zone resources.
 */
export interface ZoneState {
    /**
     * (String) 	Name of the account. It must be provided, but it can also be sourced from the `ULTRADNS_ACCOUNT` environment variable.
     */
    accountName?: pulumi.Input<string>;
    /**
     * (Block Set, Max: 1)
     * Nested block describing the info of alias zone. The structure of this block is described below.
     */
    aliasCreateInfo?: pulumi.Input<inputs.ZoneAliasCreateInfo>;
    /**
     * (String) This is used to provide comments on updates.
     */
    changeComment?: pulumi.Input<string>;
    /**
     * (Computed) (String) Whether or not the zone is signed with DNSSEC. Valid values are `SIGNED` or `UNSIGNED`.
     */
    dnssecStatus?: pulumi.Input<string>;
    /**
     * (Computed) (String) The last date and time the zone was modified, represented in ISO8601 format (`yyyy-MM-ddTHH:mmZ`).<br/>
     * Example: `2021-12-07T11:25Z`.
     */
    lastModifiedTime?: pulumi.Input<string>;
    /**
     * (String) Name of the zone.
     */
    name?: pulumi.Input<string>;
    /**
     * (Computed) (String) Name of the user that created the zone.
     */
    owner?: pulumi.Input<string>;
    /**
     * (Block Set, Max: 1) Nested block describing the info of primary zone. The structure of this block is described below.
     */
    primaryCreateInfo?: pulumi.Input<inputs.ZonePrimaryCreateInfo>;
    /**
     * (Computed) (Block Set) Nested block describing information about the name server configuration for this zone. The structure of this block is described below.
     */
    registrarInfo?: pulumi.Input<inputs.ZoneRegistrarInfo>;
    /**
     * (Computed) (Integer) Number of records in the zone.
     */
    resourceRecordCount?: pulumi.Input<number>;
    /**
     * (Block Set, Max: 1)
     * Nested block describing the info of secondary zone. The structure of this block is described below.
     */
    secondaryCreateInfo?: pulumi.Input<inputs.ZoneSecondaryCreateInfo>;
    /**
     * (Computed) (String) Display the status of the zone.
     */
    status?: pulumi.Input<string>;
    /**
     * (Computed) (Block Set) Nested block describing the zone transfer details. The structure of this block is described below.
     */
    transferStatusDetails?: pulumi.Input<inputs.ZoneTransferStatusDetails>;
    /**
     * (String) This is the type of zone. Valid values are `PRIMARY`, `SECONDARY` or `ALIAS`.
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Zone resource.
 */
export interface ZoneArgs {
    /**
     * (String) 	Name of the account. It must be provided, but it can also be sourced from the `ULTRADNS_ACCOUNT` environment variable.
     */
    accountName?: pulumi.Input<string>;
    /**
     * (Block Set, Max: 1)
     * Nested block describing the info of alias zone. The structure of this block is described below.
     */
    aliasCreateInfo?: pulumi.Input<inputs.ZoneAliasCreateInfo>;
    /**
     * (String) This is used to provide comments on updates.
     */
    changeComment?: pulumi.Input<string>;
    /**
     * (String) Name of the zone.
     */
    name?: pulumi.Input<string>;
    /**
     * (Block Set, Max: 1) Nested block describing the info of primary zone. The structure of this block is described below.
     */
    primaryCreateInfo?: pulumi.Input<inputs.ZonePrimaryCreateInfo>;
    /**
     * (Computed) (Block Set) Nested block describing information about the name server configuration for this zone. The structure of this block is described below.
     */
    registrarInfo?: pulumi.Input<inputs.ZoneRegistrarInfo>;
    /**
     * (Block Set, Max: 1)
     * Nested block describing the info of secondary zone. The structure of this block is described below.
     */
    secondaryCreateInfo?: pulumi.Input<inputs.ZoneSecondaryCreateInfo>;
    /**
     * (Computed) (Block Set) Nested block describing the zone transfer details. The structure of this block is described below.
     */
    transferStatusDetails?: pulumi.Input<inputs.ZoneTransferStatusDetails>;
    /**
     * (String) This is the type of zone. Valid values are `PRIMARY`, `SECONDARY` or `ALIAS`.
     */
    type: pulumi.Input<string>;
}
