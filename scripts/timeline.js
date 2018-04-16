function Timeline(data) {
    this.data = data;

    this.parse = function (type) {
        var entriesText = this.data.trim().split("DATE");
        var db = {};
        for (var i = 1; i < entriesText.length; i++) {
            var lines = entriesText[i].trim().split("\n");
            lines[0] = "DATE" + lines[0];
            var sub = false;
            entry = {};
            subList = [];
            s = 0;
            for (var l in lines) {
                line = lines[l].trim();
                                    
                if (line.startsWith('+')||line.startsWith('-')) {
                    var li = {};
                    li.content = line.substr(2);
                    li.mark = line[0]; 
                    subList[s] = li;
                    s++;
                }
                else {
                    var k = line.split(': ')[0];
                    var v = line.split(': ')[1];
                    entry[k] = v;
                }
            }
            entry["LIST"] = subList;
            db[i] = entry;
        }
        return db;
    }
}