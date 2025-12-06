let codeList_li = document.querySelectorAll('#codeBox li');
                    
let totalCodeListNum = codeList_li.length;

console.log(totalCodeListNum);
for(let i =0; i < totalCodeListNum; i++ ){
    const imgElement = document.createElement('img');
    // imgElement.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png";
    imgElement.setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png");
    imgElement.className = "listIcon";
    codeList_li[i].appendChild(imgElement);
};
