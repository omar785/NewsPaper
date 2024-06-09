$(document).ready(function () {
    const $gallery = $('#gallery');
    images.forEach((image) => {
        // إنشاء رابط
        const link = $('<a>')
            .attr('href', `/details.html?id=${image.id}`) // هنا يتم إنشاء الرابط مع المعرف id كمعامل
            .attr('target', '_blank'); // فتح الرابط في تبويب جديد (اختياري)

        // إنشاء صورة داخل الرابط
        const img = $('<img>')
            .attr('src', image.src)
            .attr('data-id', image.id) // إضافة معرف `id` كخاصية بيانات
            .addClass('img-fluid grid-item');

        img.on('click', (e) => {
            e.preventDefault();
            openModal(image.src, image.id);
        });

        link.append(img);
        $gallery.append(link);
    });

    $gallery.imagesLoaded().progress(function () {
        $gallery.masonry('layout');
    });

    $('#prevButton').on('click', showPrevImage);
    $('#nextButton').on('click', showNextImage);
});

function openModal(src, id) {
    const modalImage = $('#modalImage');
    modalImage.attr('src', src);
    modalImage.attr('data-id', id); // تخزين المعرف `id` في صورة الـ modal
    
    // Ensure image is loaded before showing the modal
    modalImage.on('load', function() {
        $('#imageModal').modal('show');
    });
}

function showPrevImage() {
    const currentId = parseInt($('#modalImage').attr('data-id'));
    const currentIndex = images.findIndex(image => image.id === currentId);
    const prevIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    openModal(images[prevIndex].src, images[prevIndex].id);
}

function showNextImage() {
    const currentId = parseInt($('#modalImage').attr('data-id'));
    const currentIndex = images.findIndex(image => image.id === currentId);
    const nextIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    openModal(images[nextIndex].src, images[nextIndex].id);
}
