const getInfo = async (id, token) => {
    let options = {};
    options.headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };

    const response = await fetch(`${urlApi}/${id}`, options);
    if (response.status === 401) {
        alert("El token enviado no es válido")
    } else {
        const result = await response.json();
        return result;
    }
}

const generarGenograma = (datos) => {
    var $ = go.GraphObject.make;
    myDiagram =
        $(go.Diagram, "myDiagramDiv",
            {
                initialAutoScale: go.Diagram.Uniform,
                "undoManager.isEnabled": true,
                nodeSelectionAdornmentTemplate:
                    $(go.Adornment, "Auto",
                        { layerName: "Grid" },  
                        $(go.Shape, "Circle", { fill: "#c1cee3", stroke: null }),
                        $(go.Placeholder, { margin: 2 })
                    ),
                layout: 
                    $(GenogramLayout, { direction: 90, layerSpacing: 50, columnSpacing: 10 })
            });

            myDiagram.add(
$(go.Part, 
{ layerName: "Background", position: new go.Point(0, 0),
selectable: false, pickable: false },
$(go.Picture, "./assets/images/fafh.png")
));
    function attrFill(a) {
        switch (a) {
            case "A": return "#00af54"; // green
            case "B": return "#f27935"; // orange
            case "C": return "#d4071c"; // red
            case "D": return "#70bdc2"; // cyan
            case "E": return "#fcf384"; // gold
            case "F": return "#e69aaf"; // pink
            case "G": return "#08488f"; // blue
            case "H": return "#866310"; // brown
            case "I": return "#9270c2"; // purple
            case "J": return "#a3cf62"; // chartreuse
            case "K": return "#91a4c2"; // lightgray bluish
            case "L": return "#af70c2"; // magenta
            case "S": return "#d4071c"; // red
            case "V1": return "#54D6E3"; // red
            case "V2": return "#54D6E3"; // red
            case "V3": return "#54D6E3"; // red
            case "V4": return "#54D6E3"; // red
            case "D1": return "#35A629"; // red
            case "D2": return "#35A629"; // red
            case "D3": return "#35A629"; // red
            case "D4": return "#35A629"; // red
            default: return "transparent";
        }
    }

    var tlsq = go.Geometry.parse("F M1 1 l19 0 0 19 -19 0z");
    var trsq = go.Geometry.parse("F M20 1 l19 0 0 19 -19 0z");
    var brsq = go.Geometry.parse("F M20 20 l19 0 0 19 -19 0z");
    var blsq = go.Geometry.parse("F M1 20 l19 0 0 19 -19 0z");
    var slash = go.Geometry.parse("F M38 0 L40 0 40 2 2 40 0 40 0 38z");
    function maleGeometry(a) {
        switch (a) {
            case "V1": return tlsq;
            case "V2": return trsq;
            case "V3": return brsq;
            case "V4": return blsq;
            case "D1": return tlsq;
            case "D2": return trsq;
            case "D3": return brsq;
            case "D4": return blsq;
            case "A": return tlsq;
            case "B": return tlsq;
            case "C": return tlsq;
            case "D": return trsq;
            case "E": return trsq;
            case "F": return trsq;
            case "G": return brsq;
            case "H": return brsq;
            case "I": return brsq;
            case "J": return blsq;
            case "K": return blsq;
            case "L": return blsq;
            case "S": return slash;
            default: return tlsq;
        }
    }
    var tlarc = go.Geometry.parse("F M20 20 B 180 90 20 20 19 19 z");
    var trarc = go.Geometry.parse("F M20 20 B 270 90 20 20 19 19 z");
    var brarc = go.Geometry.parse("F M20 20 B 0 90 20 20 19 19 z");
    var blarc = go.Geometry.parse("F M20 20 B 90 90 20 20 19 19 z");
    function femaleGeometry(a) {
        switch (a) {
            case "A": return tlarc;
            case "B": return tlarc;
            case "C": return tlarc;
            case "D": return trarc;
            case "E": return trarc;
            case "F": return trarc;
            case "V1": return tlarc;
            case "V2": return trarc;
            case "V3": return brarc;
            case "V4": return blarc;
            case "D1": return tlarc;
            case "D2": return trarc;
            case "D3": return brarc;
            case "D4": return blarc;
            case "G": return brarc;
            case "H": return brarc;
            case "I": return brarc;
            case "J": return blarc;
            case "K": return blarc;
            case "L": return blarc;
            case "S": return slash;
            default: return tlarc;
        }
    }
    myDiagram.nodeTemplateMap.add("M",  
        $(go.Node, "Vertical",
            { locationSpot: go.Spot.Center, locationObjectName: "ICON", selectionObjectName: "ICON" },
            $(go.Panel,
                { name: "ICON" },
                $(go.Shape, "Square",
                    { width: 40, height: 40, strokeWidth: 2, fill: "white", stroke: "#919191", portId: "" }),
                $(go.Panel,
                    { 
                        itemTemplate:
                            $(go.Panel,
                                $(go.Shape,
                                    { stroke: null, strokeWidth: 0 },
                                    new go.Binding("fill", "", attrFill),
                                    new go.Binding("geometry", "", maleGeometry))
                            ),
                        margin: 1
                    },
                    new go.Binding("itemArray", "a")
                )
            ),
            $(go.TextBlock,
                { textAlign: "center", maxSize: new go.Size(80, NaN) },
                new go.Binding("text", "n"))
        ));

    myDiagram.nodeTemplateMap.add("F", 
        $(go.Node, "Vertical",
            { locationSpot: go.Spot.Center, locationObjectName: "ICON", selectionObjectName: "ICON" },
            $(go.Panel,
                { name: "ICON" },
                $(go.Shape, "Circle",
                    { width: 40, height: 40, strokeWidth: 2, fill: "white", stroke: "#a1a1a1", portId: "" }),
                $(go.Panel,
                    {
                        itemTemplate:
                            $(go.Panel,
                                $(go.Shape,
                                    { stroke: null, strokeWidth: 0 },
                                    new go.Binding("fill", "", attrFill),
                                    new go.Binding("geometry", "", femaleGeometry))
                            ),
                        margin: 1
                    },
                    new go.Binding("itemArray", "a")
                )
            ),
            $(go.TextBlock,
                { textAlign: "center", maxSize: new go.Size(80, NaN) },
                new go.Binding("text", "n"))
        ));
    myDiagram.nodeTemplateMap.add("LinkLabel",
        $(go.Node, { selectable: false, width: 1, height: 1, fromEndSegmentLength: 20 }));
    myDiagram.linkTemplate =
        $(go.Link,
            {
                routing: go.Link.Orthogonal, corner: 5,
                layerName: "Background", selectable: false,
                fromSpot: go.Spot.Bottom, toSpot: go.Spot.Top
            },
            $(go.Shape, { stroke: "#424242", strokeWidth: 2 })
        );
    myDiagram.linkTemplateMap.add("Marriage", 
        $(go.Link,
            { selectable: false },
            $(go.Shape, { strokeWidth: 2.5, stroke: "#5d8cc1" /* blue */ })
        ));
    setupDiagram(myDiagram, datos,null);
}


function setupDiagram(diagram, array, focusId) {
    diagram.model =
        go.GraphObject.make(go.GraphLinksModel,
            { 
                linkLabelKeysProperty: "labelKeys",
                nodeCategoryProperty: "s",
                copiesArrays: true,
                nodeDataArray: array
            });
    setupMarriages(diagram);

    setupParents(diagram);

    var node = diagram.findNodeForKey(focusId);
    if (node !== null) {
        diagram.select(node);
    }
}

function findMarriage(diagram, a, b) {
    var nodeA = diagram.findNodeForKey(a);
    var nodeB = diagram.findNodeForKey(b);
    if (nodeA !== null && nodeB !== null) {
        var it = nodeA.findLinksBetween(nodeB);
        while (it.next()) {
            var link = it.value;
            if (link.data !== null && link.data.category === "Marriage") return link;
        }
    }
    return null;
}
function setupMarriages(diagram) {
    var model = diagram.model;
    var nodeDataArray = model.nodeDataArray;
    for (var i = 0; i < nodeDataArray.length; i++) {
        var data = nodeDataArray[i];
        var key = data.key;
        var uxs = data.ux;
        if (uxs !== undefined) {
            if (typeof uxs === "number") uxs = [uxs];
            for (var j = 0; j < uxs.length; j++) {
                var wife = uxs[j];
                if (key === wife) {
                    continue;
                }
                var link = findMarriage(diagram, key, wife);
                if (link === null) {
                    var mlab = { s: "LinkLabel" };
                    model.addNodeData(mlab);
                    var mdata = { from: key, to: wife, labelKeys: [mlab.key], category: "Marriage" };
                    model.addLinkData(mdata);
                }
            }
        }
        var virs = data.vir;
        if (virs !== undefined) {
            if (typeof virs === "number") virs = [virs];
            for (var j = 0; j < virs.length; j++) {
                var husband = virs[j];
                if (key === husband) {
                    continue;
                }
                var link = findMarriage(diagram, key, husband);
                if (link === null) {
                    var mlab = { s: "LinkLabel" };
                    model.addNodeData(mlab);
                    var mdata = { from: key, to: husband, labelKeys: [mlab.key], category: "Marriage" };
                    model.addLinkData(mdata);
                }
            }
        }
    }
}
function setupParents(diagram) {
    var model = diagram.model;
    var nodeDataArray = model.nodeDataArray;
    for (var i = 0; i < nodeDataArray.length; i++) {
        var data = nodeDataArray[i];
        var key = data.key;
        var mother = data.m;
        var father = data.f;
        if (mother !== undefined && father !== undefined) {
            var link = findMarriage(diagram, mother, father);
            if (link === null) {
                if (window.console);
                continue;
            }
            var mdata = link.data;
            var mlabkey = mdata.labelKeys[0];
            var cdata = { from: mlabkey, to: key };
            myDiagram.model.addLinkData(cdata);
        }
    }
}
function GenogramLayout() {
    go.LayeredDigraphLayout.call(this);
    this.initializeOption = go.LayeredDigraphLayout.InitDepthFirstIn;
    this.spouseSpacing = 30; 
}
go.Diagram.inherit(GenogramLayout, go.LayeredDigraphLayout);

GenogramLayout.prototype.makeNetwork = function (coll) {
    var net = this.createNetwork();
    if (coll instanceof go.Diagram) {
        this.add(net, coll.nodes, true);
        this.add(net, coll.links, true);
    } else if (coll instanceof go.Group) {
        this.add(net, coll.memberParts, false);
    } else if (coll.iterator) {
        this.add(net, coll.iterator, false);
    }
    return net;
};
GenogramLayout.prototype.add = function (net, coll, nonmemberonly) {
    var multiSpousePeople = new go.Set();
    var it = coll.iterator;
    while (it.next()) {
        var node = it.value;
        if (!(node instanceof go.Node)) continue;
        if (!node.isLayoutPositioned || !node.isVisible()) continue;
        if (nonmemberonly && node.containingGroup !== null) continue;
        if (node.isLinkLabel) {
            var link = node.labeledLink;
            var spouseA = link.fromNode;
            var spouseB = link.toNode;
            var vertex = net.addNode(node);
            vertex.width = spouseA.actualBounds.width + this.spouseSpacing + spouseB.actualBounds.width;
            vertex.height = Math.max(spouseA.actualBounds.height, spouseB.actualBounds.height);
            vertex.focus = new go.Point(spouseA.actualBounds.width + this.spouseSpacing / 2, vertex.height / 2);
        } else {
            var marriages = 0;
            node.linksConnected.each(function (l) { if (l.isLabeledLink) marriages++; });
            if (marriages === 0) {
                var vertex = net.addNode(node);
            } else if (marriages > 1) {
                multiSpousePeople.add(node);
            }
        }
    }
    it.reset();
    while (it.next()) {
        var link = it.value;
        if (!(link instanceof go.Link)) continue;
        if (!link.isLayoutPositioned || !link.isVisible()) continue;
        if (nonmemberonly && link.containingGroup !== null) continue;
        if (!link.isLabeledLink) {
            var parent = net.findVertex(link.fromNode);  
            var child = net.findVertex(link.toNode);
            if (child !== null) { 
                net.linkVertexes(parent, child, link);
            } else {  
                link.toNode.linksConnected.each(function (l) {
                    if (!l.isLabeledLink) return;
                    var mlab = l.labelNodes.first();
                    var mlabvert = net.findVertex(mlab);
                    if (mlabvert !== null) {
                        net.linkVertexes(parent, mlabvert, link);
                    }
                });
            }
        }
    }

    while (multiSpousePeople.count > 0) {
        var node = multiSpousePeople.first();
        var cohort = new go.Set();
        this.extendCohort(cohort, node);
        var dummyvert = net.createVertex();
        net.addVertex(dummyvert);
        var marriages = new go.Set();
        cohort.each(function (n) {
            n.linksConnected.each(function (l) {
                marriages.add(l);
            })
        });
        marriages.each(function (link) {
            var mlab = link.labelNodes.first()
            var v = net.findVertex(mlab);
            if (v !== null) {
                net.linkVertexes(dummyvert, v, null);
            }
        });
        multiSpousePeople.removeAll(cohort);
    }
};

GenogramLayout.prototype.extendCohort = function (coll, node) {
    if (coll.has(node)) return;
    coll.add(node);
    var lay = this;
    node.linksConnected.each(function (l) {
        if (l.isLabeledLink) {  
            lay.extendCohort(coll, l.fromNode);
            lay.extendCohort(coll, l.toNode);
        }
    });
};

GenogramLayout.prototype.assignLayers = function () {
    go.LayeredDigraphLayout.prototype.assignLayers.call(this);
    var horiz = this.direction == 0.0 || this.direction == 180.0;
    var maxsizes = [];
    this.network.vertexes.each(function (v) {
        var lay = v.layer;
        var max = maxsizes[lay];
        if (max === undefined) max = 0;
        var sz = (horiz ? v.width : v.height);
        if (sz > max) maxsizes[lay] = sz;
    });
    this.network.vertexes.each(function (v) {
        var lay = v.layer;
        var max = maxsizes[lay];
        if (horiz) {
            v.focus = new go.Point(0, v.height / 2);
            v.width = max;
        } else {
            v.focus = new go.Point(v.width / 2, 0);
            v.height = max;
        }
    });
};

GenogramLayout.prototype.commitNodes = function () {
    go.LayeredDigraphLayout.prototype.commitNodes.call(this);
    this.network.vertexes.each(function (v) {
        if (v.node !== null && !v.node.isLinkLabel) {
            v.node.position = new go.Point(v.x, v.y);
        }
    });
    var layout = this;
    this.network.vertexes.each(function (v) {
        if (v.node === null) return;
        if (!v.node.isLinkLabel) return;
        var labnode = v.node;
        var lablink = labnode.labeledLink;
        lablink.invalidateRoute();
        var spouseA = lablink.fromNode;
        var spouseB = lablink.toNode;
        if (spouseA.data.s === "F") {  
            var temp = spouseA;
            spouseA = spouseB;
            spouseB = temp;
        }
        var aParentsNode = layout.findParentsMarriageLabelNode(spouseA);
        var bParentsNode = layout.findParentsMarriageLabelNode(spouseB);
        if (aParentsNode !== null && bParentsNode !== null && aParentsNode.position.x > bParentsNode.position.x) {
            var temp = spouseA;
            spouseA = spouseB;
            spouseB = temp;
        }
        spouseA.position = new go.Point(v.x, v.y);
        spouseB.position = new go.Point(v.x + spouseA.actualBounds.width + layout.spouseSpacing, v.y);
        if (spouseA.opacity === 0) {
            var pos = new go.Point(v.centerX - spouseA.actualBounds.width / 2, v.y);
            spouseA.position = pos;
            spouseB.position = pos;
        } else if (spouseB.opacity === 0) {
            var pos = new go.Point(v.centerX - spouseB.actualBounds.width / 2, v.y);
            spouseA.position = pos;
            spouseB.position = pos;
        }
    });
    this.network.vertexes.each(function (v) {
        if (v.node === null || v.node.linksConnected.count > 1) return;
        var mnode = layout.findParentsMarriageLabelNode(v.node);
        if (mnode !== null && mnode.linksConnected.count === 1) {  
            var mvert = layout.network.findVertex(mnode);
            var newbnds = v.node.actualBounds.copy();
            newbnds.x = mvert.centerX - v.node.actualBounds.width / 2;
            var overlaps = layout.diagram.findObjectsIn(newbnds, function (x) { return x.part; }, function (p) { return p !== v.node; }, true);
            if (overlaps.count === 0) {
                v.node.move(newbnds.position);
            }
        }
    });
};

GenogramLayout.prototype.findParentsMarriageLabelNode = function (node) {
    var it = node.findNodesInto();
    while (it.next()) {
        var n = it.value;
        if (n.isLinkLabel) return n;
    }
    return null;
};

function generatePdf(action, diagram, options) {
    if (!(diagram instanceof go.Diagram)) throw new Error("no Diagram provided when calling generatePdf");
    if (!options) options = {};

    var pageSize = options.pageSize || "LETTER";
    pageSize = pageSize.toUpperCase();
    if (pageSize !== "LETTER" && pageSize !== "A4") throw new Error("unknown page size: " + pageSize);
    var pageWidth = (pageSize === "LETTER" ? 612 : 595.28) * 96 / 72; 
    var pageHeight = (pageSize === "LETTER" ? 792 : 841.89) * 96 / 72;

    var layout = options.layout || "portrait";
    layout = layout.toLowerCase();
    if (layout !== "portrait" && layout !== "landscape") throw new Error("unknown layout: " + layout);
    if (layout === "landscape") {
        var temp = pageWidth;
        pageWidth = pageHeight;
        pageHeight = temp;
    }

    var margin = options.margin !== undefined ? options.margin : 36;  
    var padding = options.padding !== undefined ? options.padding : diagram.padding; 

    var imgWidth = options.imgWidth !== undefined ? options.imgWidth : (pageWidth - margin / 72 * 96 * 2);  
    var imgHeight = options.imgHeight !== undefined ? options.imgHeight : (pageHeight - margin / 72 * 96 * 2);
    var imgResolutionFactor = options.imgResolutionFactor !== undefined ? options.imgResolutionFactor : 3;

    var pageOptions = {
        size: pageSize,
        margin: margin, 
        layout: layout
    };

    require(["blob-stream", "pdfkit"], function (blobStream, PDFDocument) {
        var doc = new PDFDocument(pageOptions);
        var stream = doc.pipe(blobStream());
        var bnds = diagram.documentBounds;
        var db = diagram.documentBounds.copy().subtractMargin(diagram.padding).addMargin(padding);
        var p = db.position;
        for (var j = 0; j < db.height; j += imgHeight) {
            for (var i = 0; i < db.width; i += imgWidth) {
                var r = new go.Rect(p.x + i, p.y + j, imgWidth, imgHeight);
                if (diagram.findPartsIn(r, true, false).count === 0) continue;
                if (i > 0 || j > 0) doc.addPage(pageOptions);
                var makeOptions = {};
                if (options.parts !== undefined) makeOptions.parts = options.parts;
                if (options.background !== undefined) makeOptions.background = options.background;
                if (options.showTemporary !== undefined) makeOptions.showTemporary = options.showTemporary;
                if (options.showGrid !== undefined) makeOptions.showGrid = options.showGrid;
                makeOptions.scale = imgResolutionFactor;
                makeOptions.position = new go.Point(p.x + i, p.y + j);
                makeOptions.size = new go.Size(imgWidth * imgResolutionFactor, imgHeight * imgResolutionFactor);
                makeOptions.maxSize = new go.Size(Infinity, Infinity);
                var imgdata = diagram.makeImageData(makeOptions);
                doc.image(imgdata, { scale: 1 / (imgResolutionFactor * 96 / 72) });
            }
        }

        doc.end();
        stream.on('finish', function () { action(stream.toBlob('application/pdf')); });
    });
}

var pdfOptions = 
{
    showTemporary: true,
    layout: "landscape",
    pageSize: "LETTER" 
};

function showPdf() {
    generatePdf(function (blob) {
        var datauri = window.URL.createObjectURL(blob);
        var frame = document.getElementById("myFrame");
        if (frame) {
            frame.style.display = "block";
            frame.src = datauri; 
            setTimeout(function () { window.URL.revokeObjectURL(datauri); }, 1);
        }
    }, myDiagram, pdfOptions);
}

function downloadPdf() {
    generatePdf(function (blob) {
        var datauri = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.style = "display: none";
        a.href = datauri;
        a.download = "myDiagram.pdf";

        if (window.navigator.msSaveBlob !== undefined) { 
            window.navigator.msSaveBlob(blob, a.download);
            window.URL.revokeObjectURL(datauri);
            return;
        }

        document.body.appendChild(a);
        requestAnimationFrame(function () {
            a.click();
            window.URL.revokeObjectURL(datauri);
            document.body.removeChild(a);
        });
    }, myDiagram, pdfOptions);
}

function generateImagen(action, diagram, options) {
    if (!(diagram instanceof go.Diagram)) throw new Error("no Diagram provided when calling generatePdf");
    if (!options) options = {};
    var pageSize = options.pageSize || "LETTER";
    pageSize = pageSize.toUpperCase();
    if (pageSize !== "LETTER" && pageSize !== "A4") throw new Error("unknown page size: " + pageSize);
    var pageWidth = (pageSize === "LETTER" ? 612 : 595.28) * 96 / 72;  // convert from pt to CSS units
    var pageHeight = (pageSize === "LETTER" ? 792 : 841.89) * 96 / 72;
    var layout = options.layout || "portrait";
    layout = layout.toLowerCase();
    if (layout !== "portrait" && layout !== "landscape") throw new Error("unknown layout: " + layout);
    if (layout === "landscape") {
        var temp = pageWidth;
        pageWidth = pageHeight;
        pageHeight = temp;
    }
    var margin = options.margin !== undefined ? options.margin : 36;  // pt: 0.5 inch margin on each side
    var padding = options.padding !== undefined ? options.padding : diagram.padding;  // CSS units

    var imgWidth = options.imgWidth !== undefined ? options.imgWidth : (pageWidth - margin / 72 * 96 * 2);  // CSS units
    var imgHeight = options.imgHeight !== undefined ? options.imgHeight : (pageHeight - margin / 72 * 96 * 2);  // CSS units
    var imgResolutionFactor = options.imgResolutionFactor !== undefined ? options.imgResolutionFactor : 3;
    var pageOptions = {
        size: pageSize,
        margin: margin,  // pt
        layout: layout
    };
    require(["blob-stream", "pdfkit"], function (blobStream, PDFDocument) {
        var doc = new PDFDocument(pageOptions);
        var bnds = diagram.documentBounds;
        var db = diagram.documentBounds.copy().subtractMargin(diagram.padding).addMargin(padding);
        var p = db.position;
        for (var j = 0; j < db.height; j += imgHeight) {
            for (var i = 0; i < db.width; i += imgWidth) {
                var r = new go.Rect(p.x + i, p.y + j, imgWidth, imgHeight);
                if (diagram.findPartsIn(r, true, false).count === 0) continue;
                if (i > 0 || j > 0) doc.addPage(pageOptions);
                var makeOptions = {};
                if (options.parts !== undefined) makeOptions.parts = options.parts;
                if (options.background !== undefined) makeOptions.background = options.background;
                if (options.showTemporary !== undefined) makeOptions.showTemporary = options.showTemporary;
                if (options.showGrid !== undefined) makeOptions.showGrid = options.showGrid;
                makeOptions.scale = imgResolutionFactor;
                makeOptions.position = new go.Point(p.x + i, p.y + j);
                makeOptions.size = new go.Size(imgWidth * imgResolutionFactor, imgHeight * imgResolutionFactor);
                makeOptions.maxSize = new go.Size(Infinity, Infinity);
                var imgdata = diagram.makeImageData(makeOptions);
                var a = document.createElement("a");
                a.style = "display: none";
                a.href = imgdata;
                a.download = "Genograma.png";
                document.body.appendChild(a);
                requestAnimationFrame(function () {
                    a.click();
                    window.URL.revokeObjectURL(imgdata);
                    document.body.removeChild(a);
                });
            }
        }
    });
}

const generarPng = () => {
    generateImagen(function (blob) {
        var datauri = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.style = "display: none";
        a.href = datauri;
        a.download = "Genograma.pdf";

        if (window.navigator.msSaveBlob !== undefined) { 
            window.navigator.msSaveBlob(blob, a.download);
            window.URL.revokeObjectURL(datauri);
            return;
        }

        document.body.appendChild(a);
        requestAnimationFrame(function () {
            a.click();
            window.URL.revokeObjectURL(datauri);
            document.body.removeChild(a);
        });
    }, myDiagram, pdfOptions);
}


const init = () => {
    let params = new URLSearchParams(location.search);
    var id = params.get('i');
    var token = params.get('t');
    getInfo(id, token).then((info) => {
        let { data } = info;
        generarGenograma(data);
    }).catch((error) => {
        alert("No fue posible generar el Genograma")
    });
}