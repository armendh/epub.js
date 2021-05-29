import { SpineItem } from "./section";

export interface PackagingObject {
  metadata: PackagingMetadataObject,
  spine: Array<SpineItem>,
  manifest: PackagingManifestObject,
  navPath: string,
  ncxPath: string,
  coverPath: string,
  spineNodeIndex: number
}

export interface PackagingMetadataObject {
  title: string,
  creators: Array<string>,
  description: string,
  pubdate: string,
  publishers: string,
  identifier: string,
  language: string,
  rights: string,
  modified_date: string,
  layout: string,
  orientation: string,
  flow: string,
  viewport: string,
  spread: string,
  subjects: Array<string>
}

export interface PackagingSpineItem {
  idref: string,
  properties: Array<string>,
  index: number
}

export interface PackagingManifestItem {
  href: string,
  type: string,
  properties: Array<string>
}

export interface PackagingManifestObject {
  [key: string]: PackagingManifestItem
}

export default class Packaging {
  constructor(packageDocument: XMLDocument);

  manifest: PackagingManifestObject;
  navPath: string;
  ncxPath: string;
  coverPath: string;
  spineNodeIndex: number;
  spine: Array<PackagingSpineItem>;
  metadata: PackagingMetadataObject;

  parse(packageDocument: XMLDocument): PackagingObject;

  load(json: string): PackagingObject;

  destroy(): void;

  private parseMetadata(xml: Node): PackagingMetadataObject;

  private parseManifest(xml: Node): PackagingManifestObject;

  private parseSpine(xml: Node, manifest: PackagingManifestObject): Array<PackagingSpineItem>;

  private findNavPath(manifestNode: Node): string | false;

  private findNcxPath(manifestNode: Node, spineNode: Node): string | false;

  private findCoverPath(packageXml: Node): string;

  private getElementText(xml: Node, tag: string): string
  
  private getElementTexts(xml: Node, tag: string): Array<string>

  private getPropertyText(xml: Node, property: string): string
}
