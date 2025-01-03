export interface PluginExtension {
    /**
     * Metadata of the Plugin
     */
    get metadata(): PluginMetadata

    /**
     * How much time to wait between Plugin operations
     */
    get suggestedOperationWaitTime(): number

    /**
     * Idempotent operation to process the file
     * @param filePath path to the file
     * @param databaseEntity Database Entity from Nest.js to perform updates
     */
    processFile(filePath: string, databaseEntity: any): PluginOperationStatus
}

export type PluginOperationStatus = {
    /**
     * Status of the operation
     */
    status: "OK" | "ERROR" | "WARNING"

    /**
     * Message for the user
     */
    message: string

    /**
     * Should interrupt this batch processing context because of this error?
     */
    shouldStopBatchProcessing: boolean
}

/**
 * Metadata of the Plugin.
 */
export type PluginMetadata = {
    /**
     * Name of the plugin
     */
    name: string

    /**
     * Short description of the plugin shown on the UI
     */
    description: string

    /**
     * File Extensions supported by the plugin
     */
    fileExtensions: string[]

    /**
     * Type of Plugin
     */
    type: "DOWNLOADER" | "METADATA_FETCHER"

    /**
     * Matching regex for file names to be considered for the Plugin,
     * alternative to fileNameStartsWith
     */
    fileNameRegex?: string

    /**
     * File names must start with this sequence to be considered for the Plugin,
     * alternative to fileNameRegex
     */
    fileNameStartsWith?: string
}