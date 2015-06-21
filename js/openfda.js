
        var baseSearchURL = "https://api.fda.gov/drug/label.json?";
        var limit = 100;
        var brandSearchTerm = "Advil"; /* default search term */
        var results;
        var openFDAKey = "uN2mlhVgIcwgvh8FrfmpT5f7U65RGxnrtrZCxInc"; /* API key for openFDA queries */
        var bingKey = "QF9SCR10hDCGhqhkCv3XV54bsoSEIn2bEXEsec4z7Bs="; /* API key for Windows Azure Marketplace Bing Image Search queries */
        var imageUrls = [];
        var imgRenderDelay = 1000;
        
        var mobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent); /* check for mobile user agents to allow differentiated JS, not just responsive CSS */

        JSON.flatten = function(data){ /* utility for flattening openFDA response JSON since bootstrap-table doesn't support nested structures; code from http://stackoverflow.com/q/19098797 */
            var result = {};
            function recurse (cur, prop){
                if (Object(cur) !== cur){
                    result[prop] = cur;
                } else if (Array.isArray(cur)) {
                     for(var i=0, l=cur.length; i<l; i++)
                         recurse(cur[i], prop + "[" + i + "]");
                    if (l == 0)
                        result[prop] = [];
                } else {
                    var isEmpty = true;
                    for (var p in cur) {
                        isEmpty = false;
                        recurse(cur[p], prop ? prop+"."+p : p);
                    }
                    if (isEmpty && prop)
                        result[prop] = {};
                }
            }
            recurse(data, "");
            return result;
        }

        function updateSearch(){
            brandSearchTerm = $("#search_brand").val();
            executeAPIQuery(function(){
                $('#results_table').bootstrapTable("load", results);
            });
        }

        function executeAPIQuery(render){
          results = [];
          var searchURL = baseSearchURL;
          searchURL += ("api_key=" + openFDAKey);
          searchURL += ("&limit=" + limit);
          searchURL += ("&search=brand_name:" + "\"" + brandSearchTerm.replace(/ /g, "+") + "\""); /* replace any spaces in the search term with "+" */
          $.getJSON(searchURL,{
          })
            .done(function(data){
              $.each(data.results, function(i, result){
                results.push(JSON.flatten(result));
              });
              render();
            })
            .error(function(){
                render();
            })
        }

        function renderResultsTable(){
            executeAPIQuery(function(){
                if(mobile){ /* for mobile user agents only show 5 search results and turn off frozen headers/scrolling */
                    var mobileData = $(results).slice(0,5);
                    $('#results_table').bootstrapTable({
                        columns: [{
                            radio: true,
                        },{
                            field: 'openfda.brand_name[0]',
                            title: 'Brand Name'
                        },{                        
                            field: 'openfda.generic_name[0]',
                            title: 'Generic Name'
                        }],
                        data: mobileData,
                        clickToSelect: true
                    });
                }else{
                    $('#results_table').bootstrapTable({
                        columns: [{
                            radio: true,
                        },{
                            field: 'openfda.brand_name[0]',
                            title: 'Brand Name'
                        },{                        
                            field: 'openfda.generic_name[0]',
                            title: 'Generic Name'
                        },{                        
                            field: 'openfda.manufacturer_name[0]',
                            title: 'Manufacturer'
                        }],
                        data: results,
                        height: 400,
                        clickToSelect: true
                    });
                }
            })
            $('#results_table').on('check.bs.table', function (e, row) {
                renderDetails(row);
            });
            var autoCheckFirst = window.setTimeout(function(){ /* automatically select the first item in the default search results on page load */
              $('#results_table').bootstrapTable("check",0);
            },450) 
        }

        function renderDetails(row){
          /*console.log(row);*/
          var content = "<h3>" + row["openfda.brand_name[0]"] + "</h3>";
          content += "<p class='generic'>" + row["openfda.generic_name[0]"] + "</p>";
          content += "<div class='img_gallery'><div></div><div></div><div></div><div></div><div></div></div>";
          content += "<div class='panel panel-danger'><div class='panel-heading'>WARNINGS</div><div class='panel-body'>" + row["warnings[0]"] + "</div></div>";
          content += generateField("Purpose",row["purpose[0]"]);
          content += generateField("Indications & Usage",row["indications_and_usage[0]"]);
          content += generateField("Dosage & Administration",row["dosage_and_administration[0]"]);
          $(".details_body").html(content);
          bingImageSearch(row["openfda.brand_name[0]"]);
          var asynchRenderImage = window.setTimeout(function(){ /* render the thumbnail images after the detail pane has been drawn */
            /*console.log(imageUrls);*/
            $.each(imageUrls,function(index,item){
              $(".details_body .img_gallery > div:eq("+index+")").prepend("<img alt='Product Image' src='" + item + "' />");
            });}
            , imgRenderDelay);
        }

        function generateField(label,text){
            var html = "<div class='form-group'><label>" + label + "</label><p>" + text + "</p></div>";
            return html;
        }

        function bingImageSearch(keywords){
            imageUrls = [];
            $.bingSearch({
                appKey: bingKey,
                pageNumber: 1,
                pageSize: 5,
                query: keywords,
                urlBase: "https://api.datamarket.azure.com/Bing/Search/v1/Image",
                debug: false,
                beforeSearchResults: function(data){
                },
                searchResultIterator: function(data){
                    imageUrls.push(data["MediaUrl"]);
                },
                afterSearchResults: function(data){
                }
            });
        }