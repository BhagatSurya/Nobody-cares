const fs = require('fs');
const path = require('path');

class VideoUrl {
    static datapath = path.join(path.dirname(process.mainModule.filename), 'data', 'video-url.json');

    constructor(videoUrl) {
        this.videoUrl = videoUrl;
    }

    save() {
        return VideoUrl.getExistingUrls().then(urls => {
            urls.push({ url: this.videoUrl, addedOn: new Date() });
            return fs.promises.writeFile(VideoUrl.datapath, JSON.stringify(urls, null, 2));
        });
    }
    static getExistingUrls() {
        return fs.promises.readFile(VideoUrl.datapath)
            .then(fileContent => JSON.parse(fileContent.toString() || '[]'))
            .catch(err => {
                console.error(err);
                return []; // Return an empty array in case of an error
            });
    }
}

module.exports = VideoUrl;
