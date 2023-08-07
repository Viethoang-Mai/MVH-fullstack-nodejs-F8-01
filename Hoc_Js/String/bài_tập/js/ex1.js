var keyword = "a";
var title = `<p>Từ khóa tìm kiếm:<b>${keyword}</b></p>`;
var content = ` Lorem ipsum hoàng An dolor sit amet consectetur adipisicing elit. Exercitationem repellendus nesciunt hoàng an aliquam similique commodi accusamus cupiditate, nihil quis totam explicabo nam fugiat, saepe rerum nemo. Consequatur at possimus quo HOÀNG AN animi.`;

var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var count = 0;

var result = "";

while (position !== -1) {
    result +=
        content.slice(0, position) +
        `<span>${content.slice(position, position + keyword.length)}</span>`;

    // Xóa bỏ nội dung đã được lưu vào result
    content = content.slice(position + keyword.length);
    // thực hiện tìm lại với content mới
    position = content.toLowerCase().indexOf(keyword.toLowerCase());

    count++;
}
result += content;
var kq = `<p>Tìm được <b>${count}</b> từ <b>${keyword}</b> trong chuỗi</p>`;
document.write(title + result + kq);
