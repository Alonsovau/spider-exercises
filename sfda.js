//curEle   然后Div
//oneSize  Div总大小
function menuff(nextDiv,oneSize)
{
   if(nextDiv.style.display=="none")
   {
      nextDiv.style.display="block";
      var trs=nextDiv.firstChild.rows;

      for(var i=0;i<trs.length;i++)
      {
         if(i==0)
           trs[i].bgColor=sColor;
         else
           trs[i].bgColor="";
      }
      for(var i=0;i<oneSize;i++)
      {
          var curDiv=document.getElementById("menuDiv"+i);
          if(nextDiv!=curDiv)
          {
             curDiv.style.display="none";
          }
          else
          {
             var selectone=document.getElementById("select1");
             var curIndex=selectone.selectedIndex;

             var selectElem = document.getElementById("s2d"+i);
             var selectElemCH=selectElem.firstChild;

             if(curIndex!=i){
            	 selectElemCH.selectedIndex=0;
             }

             var ids=selectElemCH.options[0].value.split(",");
             if(ids.length>2){
            	 var tableId = ids[0];
                 var linkAddress = ids[2];
                 if((tableId == "" || tableId == null || tableId=="null" || tableId == undefined || tableId == "0_-1") &&
                		 (linkAddress != "" && linkAddress != null && linkAddress !="null" && linkAddress != undefined)){

                	 window.open(linkAddress);
                	 return;
                 }

             }

             selectone.selectedIndex=i;
             select1Cli(curIndex,i);
          }
      }
      document.getElementById("keyword").value="";
   }
}
//cur1Index  select1的现在selectedIndex
//next1Index select1的然后selectedIndex
function select1Cli(cur1Index,next1Index)
{
    try
    {
       var  curDivTwo=document.getElementById("s2d"+cur1Index);
       curDivTwo.style.display="none";
       var curSelectTwoIndex=curDivTwo.firstChild.selectedIndex; //select2的selectedIndex

    }
    catch(e)
    {
    }

    var tn=document.getElementById("tn");
    var keyTableId=document.getElementById("keyTableId");
    var keyBcId=document.getElementById("keyBcId");

    try
    {
       var nextDivTwo=document.getElementById("s2d"+next1Index);
       nextDivTwo.style.display="block";
       var nextSelectTwo=nextDivTwo.firstChild;
       nextSelectTwo.selectedIndex=0;

       var ids=nextSelectTwo.options[0].value.split(",");
       keyTableId.value=ids[0];
       keyBcId.value=ids[1];
       tn.innerHTML=nextSelectTwo.options[0].text;
     }
     catch(e)
     {
        keyTableId.value="";
        keyBcId.value="";
        tn.innerHTML="";
     }
     select2Cli(cur1Index,curSelectTwoIndex,next1Index,0)
}
//cur1Index     select1的现在selectedIndex
//cur2Index     select2的现在selectedIndex
//next1Index    select1的然后selectedIndex
//next2Index    select2的然后selectedIndex
function select2Cli(cur1Index,cur2Index,next1Index,next2Index)
{
     try
     {
        var curDivThree=document.getElementById("s3d"+cur1Index+'p'+cur2Index);
        curDivThree.style.display="none";
        var curFormDiv=document.getElementById("formDiv"+cur1Index+'p'+cur2Index);

        if(curFormDiv.style.display=="none")
        {
          curFormDiv=s3Form;
        }
        curFormDiv.style.display="none";
     }
     catch(e)
     {
     }

     try
     {
        var nextDivThree=document.getElementById("s3d"+next1Index+'p'+next2Index);
        nextDivThree.style.display="block";
        var nextFormDiv=document.getElementById("formDiv"+next1Index+'p'+next2Index);
        nextFormDiv.style.display="block";

        try
        {
           nextDivThree.firstChild.selectedIndex=0;
        }catch(eee)
        {}
      }
      catch(e)
      {
      }

      try
      {
        document.getElementById("form"+next1Index+'p'+next2Index).submit();
      }
      catch(e)
      {
      }
}
//cur2id        当前select2的Div的Id
//next2Index    select2的然后selectedIndex
//nextText      然后显示表名
//nextTableId   然后tableId
function sform(cur2Id,next2Index,nextTD,nextTableId,nextBcId)
{
//	alert("*******enter sform");
//	alert("***cur2Id==="+cur2Id+"***next2Index==="+next2Index+"***nextTD==="+nextTD+"***nextTableId==="+"***nextBcId==="+nextBcId);

	var selectone=document.getElementById("select1");
//    alert("************select1.selectedIndex===="+selectone.selectedIndex);
    var curIndex=selectone.selectedIndex;
    selectone.selectedIndex=cur2Id;

   try
   {
	  if(cur2Id == curIndex){
		  var curSelectTwo=document.getElementById("s2"+cur2Id);
	      var curSelectTwoIndex=curSelectTwo.selectedIndex;

//	      alert("&&&&&&&&&&&&&&&&&&&&&===========curSelectTwoIndex===="+curSelectTwoIndex);

	      curSelectTwo.selectedIndex=next2Index;
	      var curDivThree=document.getElementById("s3d"+cur2Id+'p'+curSelectTwoIndex);

	      var curFormDiv=document.getElementById("formDiv"+cur2Id+'p'+curSelectTwoIndex);
	      if(curFormDiv.style.display=="none")
	      {
	          curFormDiv=s3Form;
	      }
	      curFormDiv.style.display="none";
	      curDivThree.style.display="none";

	      var trs=document.getElementById("ta"+cur2Id).rows;
	      for(var i=0;i<trs.length;i++)
	      {
	        trs[i].bgColor="";
	      }
	  }else{
		  var curSelectTwo=document.getElementById("s2"+curIndex);
	      var curSelectTwoIndex=curSelectTwo.selectedIndex;
//	      alert("&&&&&&&&&&&&&&&&&&&&&===========curSelectTwoIndex===="+curSelectTwoIndex);

	      curSelectTwoNew=document.getElementById("s2"+cur2Id);
	      curSelectTwoNew.selectedIndex=next2Index;

	      var curDivTwo=document.getElementById("s2d"+curIndex);

	      var curDivThree=document.getElementById("s3d"+curIndex+'p'+curSelectTwoIndex);

	      var curFormDiv=document.getElementById("formDiv"+curIndex+'p'+curSelectTwoIndex);
	      if(curFormDiv.style.display=="none")
	      {
	          curFormDiv=s3Form;
	      }
	      curFormDiv.style.display="none";
	      curDivThree.style.display="none";

	      curDivTwo.style.display="none";

	      var trs=document.getElementById("ta"+cur2Id).rows;
	      for(var i=0;i<trs.length;i++)
	      {
	        trs[i].bgColor="";
	      }
	  }
      //var curSelectTwo=document.getElementById("s2"+cur2Id);
     // var curSelectTwoIndex=curSelectTwo.selectedIndex;

     // alert("&&&&&&&&&&&&&&&&&&&&&===========curSelectTwoIndex===="+curSelectTwoIndex);

      //curSelectTwo.selectedIndex=next2Index;
     // var curDivThree=document.getElementById("s3d"+cur2Id+'p'+curSelectTwoIndex);

      //var curFormDiv=document.getElementById("formDiv"+cur2Id+'p'+curSelectTwoIndex);
      //if(curFormDiv.style.display=="none")
      //{
      //    curFormDiv=s3Form;
      //}
      //curFormDiv.style.display="none";
      //curDivThree.style.display="none";

      //var trs=document.getElementById("ta"+cur2Id).rows;
      //for(var i=0;i<trs.length;i++)
      //{
     //   trs[i].bgColor="";
     // }
    }
    catch(e)
    {}

    try
    {

      var nextDivTwo=document.getElementById("s2d"+cur2Id);
      nextDivTwo.selectedIndex=next2Index;

      var nextDivThree=document.getElementById("s3d"+cur2Id+'p'+next2Index);
      var nextFormDiv=document.getElementById("formDiv"+cur2Id+'p'+next2Index);

      nextDivTwo.style.display="block";
      nextDivThree.style.display="block";
      nextFormDiv.style.display="block";

      var tn=document.getElementById("tn");
      var keyTableId=document.getElementById("keyTableId");
      var keyBcId=document.getElementById("keyBcId");

      tn.innerHTML=nextTD.innerHTML;
      keyTableId.value=nextTableId;
      keyBcId.value=nextBcId;

      document.getElementById("tr"+cur2Id+'p'+next2Index).bgColor=sColor;

      try
      {
         nextDivThree.firstChild.selectedIndex=0;
      }catch(eee)
      {}

    }
    catch(e)
    {
      tn.innerHTML="";
      keyTableId.value=""
    }

   document.getElementById("keyword").value="";
   document.getElementById("form"+cur2Id+'p'+next2Index).submit();
}


function select1Click(index)
{
//	alert("*******enter select1Click");
   if(s1State==0)
   {
      s1State=1;
      s1Index=index;
   }
   else
   {
      try
      {
	      var curDiv=document.getElementById("menuDiv"+s1Index);
	      curDiv.style.display="none";

	      var curDivTwo=document.getElementById("s2d"+s1Index);
	      curDivTwo.style.display="none";

          var curSelectTwoIndex=curDivTwo.firstChild.selectedIndex;
	      var curFormDiv=document.getElementById("formDiv"+s1Index+'p'+curSelectTwoIndex);
	      if(curFormDiv.style.display=="none")
	      {
	          curFormDiv=s3Form;
	      }
	      curFormDiv.style.display="none";

	      var curDivThree=document.getElementById("s3d"+s1Index+'p'+curSelectTwoIndex);
	      curDivThree.style.display="none"
	  }
	  catch(e)
	  {}

	   var tn=document.getElementById("tn");
       var keyTableId=document.getElementById("keyTableId");
       var keyBcId=document.getElementById("keyBcId");

	  try
	  {
		  var nextDiv=document.getElementById("menuDiv"+index);
	      nextDiv.style.display="block";

	      var nextDivTwo=document.getElementById("s2d"+index);
	      nextDivTwo.style.display="block";

	      var nextSelectTwo=nextDivTwo.firstChild;
	      nextSelectTwo.selectedIndex=0;

	      var nextDivThree=document.getElementById("s3d"+index+'p'+0);
	      nextDivThree.style.display="block"

	      var nextFormDiv=document.getElementById("formDiv"+index+'p'+0);
	      nextFormDiv.style.display="block";

          tn.innerHTML=nextSelectTwo.options[0].text;
          var ids=nextSelectTwo.options[0].value.split(",");
          keyTableId.value=ids[0];
          keyBcId.value=ids[1];

          var trs=document.getElementById("ta"+index).rows;
          for(var i=0;i<trs.length;i++)
          {
              if(i==0)
                trs[i].bgColor=sColor;
              else
                trs[i].bgColor="";
          }
          try
          {
             nextDivThree.firstChild.selectedIndex=0;
          }catch(eee)
          {}

	   }
	   catch(e)
	   {
	      keyTableId.value="";
	      keyBcId.value="";
          tn.innerHTML="";
       }

       s1State=0;

       try
       {
         document.getElementById("form"+index+'p'+0).submit();
       }
       catch(e)
       {}
       document.getElementById("keyword").value="";
   }
}
function select2Click(cur1Index,curSelect)
{
//	alert("*******enter select2Click");
    if(s2State==0)
    {
       s2Index=curSelect.selectedIndex;
       s2State=1;
    }
    else
    {
       try
       {
          var curFormDiv=document.getElementById("formDiv"+cur1Index+'p'+s2Index);
	      if(curFormDiv.style.display=="none")
	      {
	          curFormDiv=s3Form;
	      }
	      curFormDiv.style.display="none";

	      var curDivThree=document.getElementById("s3d"+cur1Index+'p'+s2Index);
	      curDivThree.style.display="none";
	   }
	   catch(e)
	   {}

       var tn=document.getElementById("tn");
	   var keyTableId=document.getElementById("keyTableId");
	   var keyBcId=document.getElementById("keyBcId");

       try
       {
	      var nextDivThree=document.getElementById("s3d"+cur1Index+'p'+curSelect.selectedIndex);
	      nextDivThree.style.display="block";

	      var nextFormDiv=document.getElementById("formDiv"+cur1Index+'p'+curSelect.selectedIndex);
	      nextFormDiv.style.display="block";

	       tn.innerHTML=curSelect.options[curSelect.selectedIndex].text;
	       var ids=curSelect.options[curSelect.selectedIndex].value.split(",");
	       keyTableId.value=ids[0];
	       keyBcId.value=ids[1];

	       var trs=document.getElementById("ta"+cur1Index).rows;
           for(var i=0;i<trs.length;i++)
           {
              if(i==curSelect.selectedIndex)
                trs[i].bgColor=sColor;
              else
                trs[i].bgColor="";
           }
           try
           {
              nextDivThree.firstChild.selectedIndex=0;
           }catch(eee)
           {}

	    }
	    catch(e)
	    {
	       keyTableId.value="";
	       keyBcId.value="";
           tn.innerHTML="";
	    }

        s2State=0;

        try
        {
           document.getElementById("form"+cur1Index+'p'+curSelect.selectedIndex).submit();
        }
        catch(e)
        {}
        document.getElementById("keyword").value="";
    }
}
function select3Click(cur1Index,cur2Index,curSel)
{
    if(s3State==0)
    {
      s3Index=curSel.selectedIndex;
      s3State=1;
    }
    else
    {
       try
       {
	       var curFormDiv=document.getElementById("formDiv"+cur1Index+'p'+cur2Index);
	       if(curFormDiv.style.display=="none")
	       {
	          curFormDiv=document.getElementById("formDiv"+cur1Index+'p'+cur2Index+'p'+s3Index);
	       }
	       curFormDiv.style.display="none";
	   }
	   catch(e)
	   {}

       var tn=document.getElementById("tn");
	   var keyTableId=document.getElementById("keyTableId");
	   var keyBcId=document.getElementById("keyBcId");

       try
       {
          var nextFormDiv=document.getElementById("formDiv"+cur1Index+'p'+cur2Index+'p'+curSel.selectedIndex);
          s3Form=nextFormDiv;
          nextFormDiv.style.display="block";

	       tn.innerHTML=curSel.options[curSel.selectedIndex].text;
	       var ids=curSel.options[curSel.selectedIndex].value.split(",");
	       keyTableId.value=ids[0];
	       keyBcId.value=ids[1];
        }
        catch(e)
        {
            keyTableId.value="";
            keyBcId.value="";
            tn.innerHTML="";
        }

       s3State=0;

       try
       {
          document.getElementById("form"+cur1Index+'p'+cur2Index+'p'+curSel.selectedIndex).submit();
       }
       catch(e)
       {
       }

       document.getElementById("keyword").value="";

    }
}

function createXMLHttp()
{
//	alert("*******enter createXMLHttp");
    if(window.XMLHttpRequest)
    {
        return new XMLHttpRequest();
    }
    else if(window.ActiveXObject)
    {
        var aVersions = ["MSXML2.XMLHttp.5.0",
                         "MSXML2.XMLHttp.4.0",
                         "MSXML2.XMLHttp.3.0",
                         "MSXML2.XMLHttp",
                         "Microsoft.XMLHttp"];
       for(var i=0;i<aVersions.length;i++)
       {
          try
          {
              return new ActiveXObject(aVersions[i]);
          }
          catch (e)
          {
          }
       }
       throw new Error("您的浏览器不支持访问此网页");
    }
}
function commitForECMA(callback,url,curForm)
{
	//alert("*******enter commitForECMA"+url);
   request=createXMLHttp();
   request.onreadystatechange=callback;
   if(curForm==null)
   {
      request.open("GET",url);
	  request.setRequestHeader("Content-Type","text/html;encoding=gbk");
   }
   else
   {
      var fromEle="";
      var myElements=curForm.elements;
	  var myLength=myElements.length;
	  for(var i=0;i<myLength;i++)
	  {
		    var myEle=myElements[i];
		    if(myEle.type!="submit"&&myEle.value!="")
		    {
		       if(fromEle.length>0)
		       {
		         fromEle+="&"+myEle.name+"="+myEle.value;
		       }
		       else
		       {
		          fromEle+=myEle.name+"="+myEle.value;
		       }

		       fromEle+="&State=1";
		    }
	  }
      request.open("POST",url);
      fromEle=encodeURI(fromEle);
      fromEle=encodeURI(fromEle);
      request.setRequestHeader("cache-control","no-cache");
      request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	}
//	alert('FAFA44');
   request.send(fromEle);
//alert('AAA22');
   if(curForm != null){
   curForm.reset();
   }

}
function viewList()
{
//	alert("*******enter viewList");
    document.getElementById("content").innerHTML=oldContent[oldContent.length-2];
    oldContent.length=(oldContent.length-1);
}


function formSubmit(url,formId)
{
//	alert("*******enter formSubmit");
   var curForm=document.getElementById("form"+formId);
   commitForECMA(callback,url,curForm);
}
function callback()
{
//	alert("*******enter callback");
		if(request.readyState==1)
       {
          document.getElementById("content").innerHTML="<br></br><br><img src=images/loading.gif>";
       }
       if(request.readyState==4)
       {
          if(request.status==200)
          {

             oldContent.length=0;
             oldContent[0]=request.responseText;
             document.getElementById("content").innerHTML=request.responseText;
             request=null;
          }
          else
          {
             document.getElementById("content").innerHTML="<br><br><br><span style=font-size:x-large;color:#215add>服务器未返回数据</span>";
          }
	   }
}
function callbackC()
{
//	alert("*******enter callbackC");
		if(request.readyState==1)
       {
          document.getElementById("content").innerHTML="<br></br><br><img src=images/loading.gif>";
       }
       if(request.readyState==4)
       {
          if(request.status==200)
          {
            oldContent[oldContent.length]=request.responseText;
            document.getElementById("content").innerHTML=request.responseText;
            request=null;
          }
          else
          {
             document.getElementById("content").innerHTML="<br><br><br><span style=font-size:x-large;color:#215add>服务器未返回数据</span>";
          }
	   }
}
function devPage(jj)
{
//	alert("*******enter devPage");
         var curForm=document.getElementById('pageForm');
         curForm.curstart.value=jj;
         commitForECMA(callback,'search.jsp',curForm);
}
function goPage(pageMax)
{
//	alert("*******enter goPage");
       var curPage=parseInt(document.getElementById("goInt").value);
       if(isNaN(curPage))
       {
          alert("请输入数字");
       }
       else
       {
          if(curPage<1||curPage>pageMax)
          {
             alert("超出范围");
          }
          else
          {
             devPage(curPage);
          }
       }
}
function keywordSubmit()
{
//	alert("*******enter keywordSubmit");

     var curForm=document.getElementById("keyForm");
     var keyBcId=document.getElementById("keyBcId").value;
     var keyTableId=document.getElementById("keyTableId").value;
     var keyword=document.getElementById("keyword").value;
     if(keyword==""||keyword=="null")
     {
        alert("请输入关键字");
     }
     else
     {
	     if(keyTableId==null||keyTableId==""||keyTableId=="null")
	     {
	        var tn=document.getElementById("tn");
	        alert('"'+tn.innerHTML+'" 未关联表');
	     }
	     else
	     {

	        commitForECMA(callback,"search.jsp",curForm);

	        document.getElementById("keyTableId").value=keyTableId;

	        document.getElementById("keyBcId").value=keyBcId;

		 document.getElementById("keyword").value='';
	     }
     }
}

function setValues(values){
//	alert("*******enter setValues");
  var keyTableId=document.getElementById("keyTableId");
  var keyBcId=document.getElementById("keyBcId");

  var value = values.split(',');

  keyTableId.value=value[0];
  keyBcId.value=value[1];
}


