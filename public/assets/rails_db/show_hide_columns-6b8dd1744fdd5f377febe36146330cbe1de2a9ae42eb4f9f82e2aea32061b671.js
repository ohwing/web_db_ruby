function write_column_to_cookie(o,n){column_names=get_column_names_from_cookie(o),$.cookie(o,column_names+=","+n)}function remove_column_from_cookie(o,n){column_names=get_column_names_from_cookie(o),$.cookie(o,column_names.replace(","+n,""))}function get_column_names_from_cookie(o){return cookie=$.cookie(o),cookie==undefined?"":cookie}function switch_column_visibility(o){$("th.column_"+o).toggle(),$("td.column_"+o).toggle()}function toggle_columns(){0==$(".column-name input:checked").length&&$(".column-name input[type=checkbox]").each(function(){column_name=$(this).prop("name"),$(this).prop("checked",!0),remove_column_from_cookie(table_name,column_name),switch_column_visibility(column_name)})}$(function(){$("body").on("click",".settings-link",function(){return $(".rails-db-settings").toggle(),!1}),$("body").on("click",".column-name input",function(){table_name="Table: "+$("a[table_name]").attr("table_name"),column_name=$(this).prop("name"),0==$(this).prop("checked")?write_column_to_cookie(table_name,column_name):remove_column_from_cookie(table_name,column_name),switch_column_visibility(column_name),toggle_columns()})});