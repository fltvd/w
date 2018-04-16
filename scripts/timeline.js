function Timeline(data) {
    this.data = data;

    this.parse = function (type) {
        var entriesText = this.data.trim().split("@");
        var db = {};
        for (var i = 1; i < entriesText.length; i++) {
            var lines = entriesText[i].trim().split("\n");
            var sub = false;
            entry = {};
            subList = [];
            s = 0;
            for (var l in lines) {
                line = lines[l].trim();

                if (line.startsWith('+')) {
                    subList[s] = line.split(' ')[1].trim();
                    s++;
                }
                else
                {
                    var k = line.split(': ')[0];
                    var v = line.split(': ')[1];
                    entry[k] = v;                        
                }
            }
            entry["sub"] = subList;
            db[i] = entry;
        }
        return db;
    }
}