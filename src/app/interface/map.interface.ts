export interface IMap {
    /** identifier */
    id: string;
    /** map name */
    name: string;
    /** desciption of map implementation */
    description: string;
    /** origin location of the map (map base) */
    origin: IMapLocation;    
    /** collection of map event locations */
    event: IMapEvent[];
}

export interface IMapEvent {
    /** identifier */
    id: string;
    /** map event name */
    name: string;
    /** map event description */
    description: string;
    /** location of event */
    location: IMapLocation;
    /** area of effect of event */
    radius?: number;
}

export interface IMapLocation {
    /** latitude */
    lat: number;
    /** longitude */
    lng: number;
    /** alias name */
    alias?: string;    
}