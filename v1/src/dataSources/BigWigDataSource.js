import DataSource from './DataSource';

const DEBUG = false;

const bigwig = require('../vendor/bbi-js/main/bigwig');
const bin = require('../vendor/bbi-js/utils/bin');

class BigWigDataSource extends DataSource {
    constructor(url) {
        super();
        this.url = url;
    }

    getData(viewRegion) {
        return new Promise((resolve,reject) => {
            bigwig.makeBwg(new bin.URLFetchable(this.url), (_bb, _err) => {
                if (_err) {
                    reject(_err);
                    return;
                }
                let bb = _bb, tmpdata = [];
                if (DEBUG) console.log(bb.version);
                let region = viewRegion.getRegionList()[0]

                bb.readWigData(region.name, region.start, region.end, function(data) {
                    tmpdata = data.map(function (obj) {
                        return obj.score;
                    });
                    if (DEBUG) console.log(tmpdata);
                    resolve(tmpdata);
                });
            });
        });
    }
}

export default BigWigDataSource;
