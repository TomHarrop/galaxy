define("mvc/citation/citation-model",["exports","libs/bibtexParse","mvc/base-mvc","utils/localization"],function(t,e,i,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(e),a=n(i);n(o);_.extend(r.ENTRY_TYPES_,{online:998,data:999});var l=Backbone.Model.extend(a.default.LoggableMixin).extend({_logNamespace:"citation",defaults:{content:""},initialize:function(){var t;try{t=bibtexParse.toJSON(this.attributes.content)}catch(t){this.log("Error parsing bibtex: "+t)}if(this._fields={},this.entry=_.first(t),this.entry){var e=this.entry.entryTags;for(var i in e){var o=e[i],n=i.toLowerCase();this._fields[n]=o}}},entryType:function(){return this.entry?this.entry.entryType:void 0},fields:function(){return this._fields}}),s=Backbone.Collection.extend(a.default.LoggableMixin).extend({_logNamespace:"citation",urlRoot:Galaxy.root+"api",partial:!0,model:l}),u=s.extend({url:function(){return this.urlRoot+"/histories/"+this.history_id+"/citations"}}),c=s.extend({url:function(){return this.urlRoot+"/tools/"+this.tool_id+"/citations"},partial:!1});t.default={Citation:l,HistoryCitationCollection:u,ToolCitationCollection:c}});
//# sourceMappingURL=../../../maps/mvc/citation/citation-model.js.map
