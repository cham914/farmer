"use strict";function Queue(){this._oldestIndex=0;this._newestIndex=0;this._items=[]}var PBI=PBI||{};PBI.ajaxQueue=new Queue;PBI.AntiForgeryTokenName="__RequestVerificationToken";PBI.chatPopWindow=null;PBI.isSessionAlive=!0;PBI.PageNonceKey="Token";PBI.defaultTransferDate=null;PBI.start_Date=null;PBI.end_Date=null;PBI.Date=null;PBI.appendPageNonce=function(n){if(!n||typeof n!="string")throw"Url is not defined or is not a string.";var t=n.indexOf("?")!==-1?"&":"?";return PBI.pageNonce?n+t+PBI.PageNonceKey+"="+window.encodeURIComponent(PBI.pageNonce):n};PBI.sendAjax=function(n,t,i){if(PBI.isSessionAlive){var r,u="GET",f={},e,o="json";n&&(n.url&&(r=n.url),n.type&&(u=n.type),n.data&&(f=n.data),n.headers&&(e=n.headers),n.dataType&&(o=n.dataType=="default"?null:n.dataType));r=PBI.appendPageNonce(r);u.toUpperCase()=="POST"&&(f[PBI.AntiForgeryTokenName]=PBI.antiForgeryToken);PBI.ajaxQueue.enqueue({url:r,type:u,data:f,headers:e,cache:!1,dataType:o,timeout:3e4,success:t,error:i});PBI.runAjaxQueue()}};PBI.isAjaxQueueProcessing=!1;PBI.runAjaxQueue=function(n){if(PBI.ajaxQueue.size()<=0){PBI.isAjaxQueueProcessing=!1;return}if(!PBI.isAjaxQueueProcessing||n){PBI.isAjaxQueueProcessing=!0;var t=PBI.ajaxQueue.dequeue();$.ajax({url:t.url,type:t.type,data:t.data,headers:t.headers,cache:t.cache,dataType:t.dataType,timeout:t.timeout,success:function(n){n.isSessionForciblyTerminated?(PBI.isSessionAlive=!1,alert(n.errorMessage),window.location.href=n.redirectUrl):n.navigationAlreadyOccurred||t.success(n);PBI.runAjaxQueue(!0)},error:function(n,i,r){typeof t.error=="function"&&t.error(n,i,r);PBI.runAjaxQueue(!0)}})}};PBI.printInPage=function(n){var t=document.createElement("style");t.innerHTML="@media print{ "+n+" { display: none; } }\n";document.body.appendChild(t);window.print();t.parentNode.removeChild(t)};PBI.preventCutCopy=function(n){$(document).ready(function(){$(n).on("cut copy dragstart",function(n){n.preventDefault()})})};PBI.asDecimal=function(n){return n?n.toString().replace(/[^0-9.]/g,""):0};PBI.toggleHideShowOnKeyboardShortcut=function(n){var t=n.keyCode?n.keyCode:n.which;return n.ctrlKey&&String.fromCharCode(t).toLowerCase()==="m"&&(n.preventDefault(),$("#"+n.target.id).togglePassword("toggle")),!0};PBI.isValidDate=function(n){return moment(n,"MM/DD/YYYY",!0).isValid()};PBI.getCalendar=function(n){var t=new Pikaday({format:"MM/DD/YYYY",field:n});return n.removeEventListener("change",t._onInputChange),t};$(function(){function u(n,t,i,r){var u=window.screenLeft!=undefined?window.screenLeft:screen.left,f=window.screenTop!=undefined?window.screenTop:screen.top,e=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,o=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,s=e/2-i/2+u,h=o/2-r/2+f;return PBI.chatPopWindow=window.open(n,t,"width="+i+",height="+r+",top="+h+",left="+s+",toolbar=no,location=no,menubar=no"),window.focus&&PBI.chatPopWindow.focus(),!1}var n=$("#chatLink");n&&PBI.chatStatusUrl&&$.ajax({url:PBI.chatStatusUrl,type:"GET",cache:!1,dataType:"text",contentType:"text/plain; charset=utf-8",timeout:3e4,success:function(t){switch(t){case"online":n.html("Chat");break;case"busy":n.html("Chat (busy)");break;case"offline":n.html("Chat (offline)");break;default:n.html("Chat (offline)")}},error:function(){n.html("Chat (offline)")}});$(document).on("click","#chatLink",function(t){PBI.RevationDisplayChatInPopup?PBI.chatPopWindow==null||PBI.chatPopWindow.closed?u(n.attr("href"),"LinkLiveWindow","900","500"):(t.preventDefault(),t.stopPropagation(),PBI.chatPopWindow.focus()):n.attr("target","_blank")});$(document).on("click",".launchInModalWindow",function(n){n.preventDefault();$.magnificPopup.open({items:{src:$(".modalWindowLoadingContent"),type:"inline"},disableOn:0,mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!0,closeMarkup:""});var t=function(n,t){$.magnificPopup.instance.items=[{src:t,type:"inline"}];$.magnificPopup.instance.updateItemHTML();$.magnificPopup.instance.content.find(".launchInModalWindowClose").on("click",function(n){n.preventDefault();$.magnificPopup.instance.close()})},i=function(){t(n,$(".modalWindowErrorContent"))},r=function(r){typeof r=="string"?t(n,r):i()};PBI.sendAjax({url:n.currentTarget.href||n.currentTarget.value,dataType:"default"},r,i)});$(document).on("click",".popup-iframe",function(n){n.preventDefault();var t=$(this).attr("href");$(this).magnificPopup({disableOn:0,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!0,closeMarkup:"",items:{src:t},iframe:{markup:$("#viewTransactionImages").html()},callbacks:{open:function(){var n=$("#loadImage"),t=$(".mfp-iframe");n.width(t.width()).height(t.height());n.fadeIn("slow")}}}).magnificPopup("open")});$(document).on("click","#checkViewerDialogClose",function(n){n.preventDefault();$.magnificPopup.instance.close()});var t=null,i=function(){t&&t.showingFilterOptions()&&t.showingFilterOptions(!1)},f=function(){$("#accountSwitcherShow").hide();$("#accountSwitcherHide").show();$("#filter-account-box").show().attr("aria-hidden","false").removeClass("is--hidden");$("#accountSwitcher").attr("aria-expanded","true")},r=function(){$("#accountSwitcherShow").show();$("#accountSwitcherHide").hide();$("#filter-account-box").hide().attr("aria-hidden","true").addClass("is--hidden");$("#accountSwitcher").attr("aria-expanded","false")};$(document).on("click","html",function(){i();r()});$(document).on("click","#accountSwitcher",function(n){n.stopPropagation();i();$("#filter-account-box").is(":visible")?r():f()});ko.bindingHandlers.slideVisible={init:function(n,t){var i=t();$(n).toggle(ko.unwrap(i))},update:function(n,t){var i=t();ko.unwrap(i)?$(n).slideDown(400):$(n).slideUp(400)}}});ko.bindingHandlers.reset={init:function(n,t,i,r,u){if(typeof t()!="function")throw new Error("The value for a reset binding must be a function");ko.utils.registerEventHandler(n,"reset",function(i){var r,f=t();try{r=f.call(u.$data,n)}finally{r!==!0&&(i.preventDefault?i.preventDefault():i.returnValue=!1)}})}};Queue.prototype.size=function(){return this._newestIndex-this._oldestIndex};Queue.prototype.enqueue=function(n){this._items.push(n);this._newestIndex++};Queue.prototype.dequeue=function(){return this.size()>0?this._items[this._oldestIndex++]:null}