$(document).ready(function () {
            const images = [
                { id: 1, src: '/dummy-post-for-testing/images/اعلانات/اعلان السحمة 1.png', state: 'الشارقة', area: 'السحمة', type: 'أرض', price: 310000, landSpace: 2500 },
                { id: 2, src: 'https://via.placeholder.com/400x400', state: 'NY', area: 'suburban', type: 'apartment', price: 750000, landSpace: 1500 },
                { id: 3, src: 'https://via.placeholder.com/400x800', state: 'CA', area: 'urban', type: 'house', price: 500000, landSpace: 1000 },
                { id: 4, src: '/9/1000_aqar_1717439823336.jpeg', state: 'NY', area: 'suburban', type: 'apartment', price: 750000, landSpace: 1500 },
                { id: 5, src: '/9/Screenshot 2024-06-03 224148.png', state: 'NY', area: 'urban', type: 'apartment', price: 650000, landSpace: 1200 },
                { id: 6, src: 'https://via.placeholder.com/400x700', state: 'NY', area: 'urban', type: 'apartment', price: 650000, landSpace: 1200 },
                { id: 7, src: 'https://via.placeholder.com/400x3000', state: 'NY', area: 'urban', type: 'apartment', price: 650000, landSpace: 1200 },
                { id: 8, src: 'https://via.placeholder.com/400x500', state: 'CA', area: 'urban', type: 'house', price: 500000, landSpace: 1000 },
                { id: 9, src: 'https://via.placeholder.com/400x400', state: 'NY', area: 'suburban', type: 'apartment', price: 750000, landSpace: 1500 },
                { id: 10, src: 'https://via.placeholder.com/400x800', state: 'CA', area: 'urban', type: 'house', price: 500000, landSpace: 1000 },
                { id: 11, src: 'https://via.placeholder.com/400x400', state: 'NY', area: 'suburban', type: 'apartment', price: 750000, landSpace: 1500 },
                { id: 12, src: 'https://via.placeholder.com/400x400', state: 'NY', area: 'urban', type: 'apartment', price: 650000, landSpace: 1200 },
                { id: 13, src: 'https://via.placeholder.com/400x400', state: 'NY', area: 'urban', type: 'apartment', price: 650000, landSpace: 1200 },
                { id: 14, src: '/dummy-post-for-testing/images/اعلانات/اعلان السحمة 1.png', state: 'الشارقة', area: 'السحمة', type: 'أرض', price: 310000, landSpace: 2500 },
                { id: 15, src: 'https://via.placeholder.com/400x400', state: 'NY', area: 'suburban', type: 'apartment', price: 750000, landSpace: 1500 },
                { id: 16, src: 'https://via.placeholder.com/400x800', state: 'CA', area: 'urban', type: 'house', price: 500000, landSpace: 1000 },
                { id: 17, src: '/9/1000_aqar_1717439823336.jpeg', state: 'NY', area: 'suburban', type: 'apartment', price: 750000, landSpace: 1500 },
                { id: 18, src: '/9/Screenshot 2024-06-03 224148.png', state: 'NY', area: 'urban', type: 'apartment', price: 650000, landSpace: 1200 },
                { id: 19, src: 'https://via.placeholder.com/400x700', state: 'NY', area: 'urban', type: 'apartment', price: 650000, landSpace: 1200 },
                { id: 20, src: 'https://via.placeholder.com/400x3000', state: 'NY', area: 'urban', type: 'apartment', price: 650000, landSpace: 1200 },
                { id: 21, src: 'https://via.placeholder.com/400x500', state: 'CA', area: 'urban', type: 'house', price: 500000, landSpace: 1000 },
                { id: 22, src: 'https://via.placeholder.com/400x400', state: 'NY', area: 'suburban', type: 'apartment', price: 750000, landSpace: 1500 },
                { id: 23, src: 'https://via.placeholder.com/400x800', state: 'CA', area: 'urban', type: 'house', price: 500000, landSpace: 1000 },
                { id: 24, src: 'https://via.placeholder.com/400x400', state: 'NY', area: 'suburban', type: 'apartment', price: 750000, landSpace: 1500 },
                { id: 25, src: 'https://via.placeholder.com/400x400', state: 'NY', area: 'urban', type: 'apartment', price: 650000, landSpace: 1200 },
                { id: 26, src: 'https://via.placeholder.com/400x400', state: 'NY', area: 'urban', type: 'apartment', price: 650000, landSpace: 1200 },

                // Add more images as needed
            ];

            let currentIndex = 0;

            const renderGallery = (images) => {
                const gallery = $('#gallery');
                gallery.empty();
                images.forEach((image, index) => {
                    const imgElement = $(`<div class="grid-item col-4 col-lg-2"><img src="${image.src}" class="img-fluid" data-index="${index}"></div>`);
                    imgElement.on('click', () => openModal(index));
                    gallery.append(imgElement);
                });
                // Initialize Masonry after all images have loaded
                gallery.imagesLoaded(function () {
                    gallery.masonry('reloadItems').masonry();
                });
            };

            const openModal = (index) => {
                currentIndex = index;
                $('#modalImage').attr('src', images[index].src);
                $('#imageModal').modal('show');
            };

            const showPrevImage = () => {
                currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
                $('#modalImage').attr('src', images[currentIndex].src);
            };

            const showNextImage = () => {
                currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
                $('#modalImage').attr('src', images[currentIndex].src);
            };

            const filterImages = () => {
                const searchBox = $('#searchBox').val().toLowerCase();
                const stateFilter = $('#stateFilter').val();
                const areaFilter = $('#areaFilter').val();
                const propertyTypeFilter = $('#propertyTypeFilter').val();
                const propertyCategoryFilter = $('#propertyCategoryFilter').val();
                const priceFilter = $('#priceFilter').val();
                const landSpaceFilter = $('#landSpaceFilter').val();

                const filteredImages = images.filter(image => {
                    return (!searchBox || image.src.toLowerCase().includes(searchBox)) &&
                        (!stateFilter || image.state === stateFilter) &&
                        (!areaFilter || image.area === areaFilter) &&
                        (!propertyTypeFilter || image.type === propertyTypeFilter) &&
                        (!propertyCategoryFilter || image.type === propertyCategoryFilter) &&
                        (!priceFilter || image.price <= priceFilter) &&
                        (!landSpaceFilter || image.landSpace >= landSpaceFilter);
                });

                renderGallery(filteredImages);
            };

            $('#searchButton').on('click', filterImages);
            $('#prevButton').on('click', showPrevImage);
            $('#nextButton').on('click', showNextImage);

            $('#modalImage').swipe({
                swipeLeft: showNextImage,
                swipeRight: showPrevImage
            });

//search when press enter
            $('#searchBox').on('keypress', function (e) { if (e.which === 13) $('#searchButton').click(); });



            renderGallery(images);
        });