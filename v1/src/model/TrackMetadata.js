/*
const SCHEMA = { // Schema for the plain object argument to the constructor.
    type: "object",
    properties: {
        name: {type: "string"},
        type: {type: "string"},
        options: {type: "object"},
        url: {type: "string"},
        // A better name for `metadata` would be `tags` or `misc`.
        // I don't like it, but it's what our JSON files contain.  
        metadata: {type: "object"} 
    }
}
*/

class TrackMetadata {
    constructor(plainObject) {
        Object.assign(this, plainObject);
        this.name = this.name || "";
        this.type = this.type || "";
        this.metadata = this.metadata || {};
        this.options = this.options || {};
    }

    getType() {
        return this.type.toLowerCase();
    }
}

export default TrackMetadata;
