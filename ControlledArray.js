export default class ControlledArray extends Array {
    filters = [];
    sorts = [];
    control = {
        partialData: false, // partial | full
        range: {
            chunk_start: 0,
            limit: 100
        }
    }
    load(ph) { }
}