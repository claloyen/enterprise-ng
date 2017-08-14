interface SohoHierarchyLegend {
  value: string;
  label: string;
}

/*
  * @param {String} legend  Pass in custom markdown for the legend structure.
  * @param {String} legendKey  Key to use for the legend matching
  * @param {String} dataset  Hierarchical Data to display
  * @param {Boolean} newData  New data to be inserted into the hierarchy dataset ?
  * @param {String} templateId  Additional product name information to display
  * @param {Boolean} mobileView  If true will only show mobile view, by default using device info to determine.
  * @param {String} beforeExpand  A callback that fires before node expansion of a node.
 */

interface SohoHierarchyOptions {
  dataset?: Array<any>;
  newData?: Array<any>;
  templateId?: string;
  mobileView?: boolean;
  legend?: Array<SohoHierarchyLegend>;
  legendKey?: string;
  beforeExpand?: Function;
}

/**
 * This interface represents the public API exposed by the
 * listview.
 */
interface SohoHierarchyStatic {
  /** Access to the control's options block. */
  settings: SohoHierarchyOptions;

  /** Destroys the control on completion. */
  destroy(): void;
}

interface SohoHierarchyEvent {
  data: any;
  eventType: string;
  targetInfo: SohoHierarchyTarget;
}

interface SohoHierarchyTarget {
  pageX: number;
  pageY: number;
  target: HTMLElement;
}

/**
 * JQuery Integration
 */
interface JQueryStatic {
  hierarchy: SohoHierarchyStatic;
}

interface JQuery {
  hierarchy(options?: SohoHierarchyOptions): JQuery;
}
