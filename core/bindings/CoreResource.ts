// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { File } from "./File";
import type { JobReport } from "./JobReport";
import type { LocationResource } from "./LocationResource";

export type CoreResource = "Client" | "Library" | { Location: LocationResource } | { File: File } | { Job: JobReport } | "Tag";