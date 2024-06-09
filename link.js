const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        // البحث عن العرض بناءً على المعرف id
        const image = images.find(image => image.id === parseInt(id));

        if (image) {
            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = `
                <h1>تفاصيل العرض</h1>
                <p>الولاية: ${image.state}</p>
                <p>المنطقة: ${image.area}</p>
                <p>النوع: ${image.type}</p>
                <p>السعر: ${image.price}</p>
                <p>مساحة الأرض: ${image.landSpace}</p>
                <img src="${image.src}" alt="عرض الصورة">
            `;
        } else {
            document.getElementById('details').innerHTML = '<p>العرض غير موجود</p>';
        }
