function Timeline(data)
{
  this.data = data;

  this.parse = function(type)
  {
    var entriesText = this.data.trim().split("@");
    var db = {};
    for( var i=1; i<entriesText.length; i++ )
    {
        var lines = entriesText[i].trim().split("\n");
        var entryMap = lines.map(liner); 
        var entry = {};
        for( e in entryMap)
        {
            for( k in entryMap[e])
            {
                entry[k] = entryMap[e][k];
            }            
        }
        
        db[i] = entry;
        console.log();
    }
    return db;
  }

}

function liner(line)
{
    if( line.trim().startsWith('+') )
    {
        console.log(line);
    }
    var key = line.indexOf(": ") > -1 ? line.split(": ")[0].trim() : null;
    var value = line.indexOf(": ") > -1 ? line.split(": ")[1].trim() : null;
    var e = {};
    e[key] = value;
   // console.log(key);
    return e;
}