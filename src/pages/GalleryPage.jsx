// import "../assets";
import HeroSection from "../component/HeroSection";
import Banner from "../component/Banner";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Button } from "../component/Buttons";
import HeroHeadings from "../component/HeroSection/HeroHeadings";
import { GalleryItems } from "../constant";

const Gallery = () => {
  const images = [
    {
      src: "https://s3-alpha-sig.figma.com/img/4ff2/5fbb/d22801330eccf9aaeedf7388f729ecdf?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=szEUR6hNWkXzJIOVxDtJrT-TXVhNj5bWHAWhZyDfvjEjnPRhIwR750uREpQLgLKzhTGQ08U~F1sQt2oX3ZrgHXO9MgOn9CxEoyWSek0GvKkz0r7rl16qmn-4ZrUTlY3QdFfGb9WgNy0ToNd-DwtGVUnd6mDIZGLGtXza1hufCrG~9GinbDc7n2AesJyvlsQQwdduRwh-sT5y2kr92sIWVWyyf6QQEz1VUV8GpqBTLZp3pu5aV5f0L~0jLoLvrQRARY5qWM9QI6lAele9TXfXPfT9mryWXUUBScuw5yaxczQVnkpOLzLb6dWDBXWeCeZCFP47V41VwAPnkNYSTNZazw__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/8617/a5ae/25ee4aa2ad522926670eec6990d4dfd8?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UP29Azac3cX8pWZxMn2xUHolZi6N3GcG4cu2dJzjHMA36e1oJGBdYOPPsvpgMSD~nVBDU6SpWxC597ijxOEPzauC5qnWTNqXN6hHiRIv~Qgcgbt05LQI7URKsGlrXtQ~5Q0HWVhqocn-gDZj~dNfJrOs6nY6TGD1Bn2bPgcqK~QOKu57UBRKDo4Z5iu4KSc3kBgV13vvqUTyHb4AdLKPfh9vRzbpQU1uryoucsyFMgmhe9jLlM0Hu5TqlNgWVcwbbgr0~aUNcxyz4508Jc~PEatjUvMDoH8u5d3m69Jj~moQZ6ajBQLaNM099IIx3jWOpM1iZ3b19LDiEneog6KHyw__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/6521/b928/1e965b9e2b4c3f113bb67ce649d7a461?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r2wNgUQxFm798hYM8iigkiL0Ac4F43t9rO2vYMNScYzIWW-jLE5T3UVVBG~9zPSpSIFep4nCjnY-1P3mAmgB9IsYDSotdQid5JxQ7SEHuDgH1v5vaIJ6RNYSE2P1hB8FPlL3IecuTqxUWEpuYSuCPLKeFgTpxHLXLl3sYwYyyE9n2AzPQ9-IJ61t7sz8HIkDwLWzHQnw6sx71-pNEFX7hoWwqSI3jY3ZwQMR731tDeb~Dzk3Cnw1gDPIKHIrsNpTdgEKKVATbx4FCPCnCvyNSNUm66cEH-IYAsm1bP8LL3MFIcRqXLDXwpSpFsbdAatptbX79iX0fSlJOdko-o4kEw__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/9c82/fc43/ae69e562278d76e28ce26cd902277c96?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Y3lxBUrgLhNKTV6UoIdwqxsacbMAGnP6DFsogx8hYHOoP8reucE0ZYaC5AfPhyrfQQzmk7gTxZ-Im4KayMl-HaNbIP6zh62GOLP9sEaIvT5Hl~UE5WTQlx9UT3l9SE1lC1wwTEsSyKpYdvyFIwJc~10ksXcUdALILm8jlS-5K~jKDmun2r39dTsDIevcgeKuu3m4NJRxEji9~SLfZRIWgdH2ag0e5Lx8dAUzTihqW7o7RFY~aqbkHdh3YQKZRaQYyybqB06oaPIHZ8GChRkumjZ1LKKdU3AHIdqACbU0MjIyqe7A1FBuc2SmcBpS8x5Gd4fTtpsr5U30XQfGhZ793g__",
      alt: "Description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/1a15/7a9b/d8d20fe935041ffe7ab54449fbea9b8b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IgA4rMiJKKMElhBHhqys-3CCCjcTY1nMKxjyiUA80e60pEkw7HlSr-AUW2wQ8VoNPC9QVNQIg0qsFetteTkkGMalHt9~r9S5eg05z6NoYJufXR2uk0j3oteMzxI~i6lIv8uieXMeFcAmanPvwcy0FYKnCXGbIR~ZD-udKazh6YKM~zMNq9nM6IZuSAhFL4~66piyAeRb7TJSS4OAT5aWWe3fLCUUBEnT5HCiKcHzhD1iMUtW-Yf4cS3CHNp24qg38iBGYmED39tT3~3PJHWSICQQqQ-A~hbWPUPb6KLLSiuudlqots1iZsgz-z7-nvATTzvNIqhJnuooSCqveUV-Xw__",
      alt: "Description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/4e43/a559/d68e2d123b678f9446c814eccc4c4e68?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fZsWNBDF0fiKEp9pbzCx30cohKiHMFmIw34DwNCrU1g7qIQxN6UY45dTLEbRZTpOp0jKpPM7d8UH2eC1QyMQUoQmmnzbC6fsFY1r8Qc1Pvd6BHO84aAYwTy1fJ6iyzUxcLrjvWUBv0DhlKo6TLfSbLIlyDUECjJPEcmmeIEvTDZRf4JjCSwCfsiHU1HXxFeFGotZLHe2OF6cIv6D144uutWr2FNLZc4rfjveV-gmhuxPmm6bDis9cUqEfTi3WbnCg7h98J8vjNJJhJ~faV5Qm7aCwFJws3iAEYFyPeuzAYhZX08v2Z-tkbVxGJ3O~gAx-IHRKehxPwuYcqVEaQoKtA__",
      alt: "Description",
    },
  ];

  const images1 = [
    {
      src: "https://s3-alpha-sig.figma.com/img/5d06/b58d/ba0e694cee79ef5384b5687366cc3ed3?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s8QxeYj6PYG9ptlYU2FEfRCaw9gM11ubym1I21N63402JygyamiPbn3QNgEOBJzxnuN7oSA23fpsGO9mOMdIVlJqHlKqBVixt7BY91xO1DbLKrWIC4Y-yd5DE8uy-hrRso2PNs3GuPkMMyvmwTENaA0Tg5KEhrW5x~yDBF7ZDA~~A9FXisXLgiaEc5R6dchNkLTT-BcGl~NUvOAPOjAH0LNGkZz88XGOcS5cYgU4fT4Kvv5xvb9HSOuZVi5jJunSXqPlzyyJm2Oz35W8GLOFD4CKA1VP03QXu2rUvl8n4MaUDM6wimq5olHJ-jl8QGuDwkM73ljfqXynYSCeeoz3hg__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/9d15/d85a/c4842f3a8752cb53168ec1abb70b057b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LCvPArHU05vGQZV-6XxMhjbDocbMbNtsn-p6yTPeqwiuz9ppZC7-dRZSN24lym2-Fq8S1aFZsDyP8FU3DtfIn4r5sSyDVd20CTzM8UVaupxqrzBnuPC3Bgp4xZZCGxz6UUym0eorJ9SUpeVHlBq4ljI2NjINrteNrUX-vPURrXAZ0Rf0jz~40gCqW4zzsUgiFVEybSB6lp~TrYYXHIxklhIvUIDh3QwQXhGlPzd~URYYRSonMAGYYok~kr33h5lHpm-QJpyO0lfuQiWpyEe6bMASZ8eEKpVblkTO9Z05DtYzY47Axg3hFbQyn7QN~lHYSGOKYGRIS20i86~bAKCiCg__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/5fef/a2f0/5c85f954f99359a9906e7fc425e46898?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Lsp3FB5EUxJ6pWqR7T7EQJ5hSrGumuK~clDHGc67qEwt0ahzErI-o1jSOfEUo7fqMBCDOtA2f5T9UW2HS9SHFPo1BNqX2yQEMXQ8OT5vDU8HS18MOHlfIUeuaJs7QEq662EGkROxJfdxnUb1Xc4R9xn7hYPX5IgqMuOBMMZyZ7qnRVt~puzs9Fwp2Y98OF3Day5qaM~h0NgcVLISNf70uIXDdBc8puR9Gnvxh1KZJcgOfMuEbgUVw5PNB1f~jEigOQaUM0XILZvKyIKvX6LiiNkYqXfAF0zgw8yZ0llAFGfsGURkGGUj42cDyRbsUr6D271ZAKiD-HnYniudMZdCiA__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/440a/a3ef/5561b85c0fb6d32db923d0081101ae6a?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gUHxo5W37Zu5RzYzR9slBT9qRt0LMpoOmwRPzvyBHlmogru0l6juwaJY9g3P6UBRvJQWGtpKP-5l~J7~h~-ua4Gy076lrrkQxOuw~8aLxglw7zC8Wm7h~b-WyQ-Pc3jMkpPc5pKc1AODmplf63rCJurcQtSu7bAXuWBQ0YwJIa07MKTH1QDC0ArjrxLw3eCoQLuwFvA0Y7oAkfb2Gsf4~Pv2xs4BE2fO~I-M6fcAJ-QUrueUeMUjCisDDFeOmKNAyB20m7Y7jre-iBFZQub03z1VfZhnkuYbqtNCwzZaukbjZiwoCZmJ12s8mfL8QAPq8Kirn22bzFPdqug2cFNZ~A__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/93c5/95c9/b90a0feb6593b9d24a0b3709e4c2bd86?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dZrDE23EJGptLAdQwVNQooSCdg0owkMk5bdkJ6lX7Spe2eA6Wt4I45Tvx0xT1XTkv4G9dTpHUVKN1TOcapqNQ5qolkURHFbNyHir7HBrPuZEdp7yBKtUrp9zxPx-QGiLl3UjaPsyFJSuuOMWt-YNvBMGuIyPo2WOyCwFLPKI1YhAir-POtdeWof2ydMF~JyExP88fwtPhfq-aqYod3q74zgmlmSxMoSIR~H1Iwr28U-be9ZmaL2uW1nXGlGHmNjTScEkc1rGonJ-WHEGhYidQ0DBiLc3PVl03m5Kv33esu0AGRVVo2JMzQP4AqBslwVaBIEk-jDsLspkZiDWvxfoVA__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/a863/7b3c/2e3b6a00b8bbcfe1105f7916ee6a392e?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=W7lhSDPRtP2oh3bQ4RkxTjdNw5V4Rt2Wcz7Ks3ASIqq2r6o~3bN3zyOGysMx-rAUq3Vg3yRsjsMAu0gjtJfgUoyFib9Z8E-tIBsJpW~JAjLXZFSSpmMZsEIiIhVXjp1h1X2h-wah2OuGgoRj1EG04MZ7mHD~EX7Xiw6Qpf56Trnb0e1GJ4TmBsWVxYrIWMTuk2QaTCL2QFy5UNIipSz6uQyVM97OkBBYlG0cZ4JYssKZet3lvCzytPXK5e-6A-FCjFJw2TNdHN4bX6DjnH6mHpL-lsbowzEMFLGcX9G6qm4lyz-3eetoI2uZEC6l9-edoQLv2Z-pJ9u-9pAOmxDcUw__",
      alt: "Description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/28b9/b715/ba034abcefb527c735a75e71e050adde?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K41~5Q4rlDm6mGnW-cYugSh0ZytyI3dYgE7M3TSGyOSgWQEuR25D6DXPycxs-Zh0~Wy-P-z2qzjxbYyYAcpoZUz0g-JqRmzi4tJQbgt716lRRaUQVaaiGgoUsv8xNpgnhTN-aXbos5JokU72pfXCRUa4QRsnFPby27pjhegEAd-Lm6TRMNMcM4tqpn97ZPcGKMOh7TUx2gnf5ZN6A1r3agwKSKjuVzIXauZQubP8fsvJ1uM0sM~YvLCXBVspgI8uBGv9ly30A3kgo~Xn21cOAm-quqCcz0Q9ZpbV~PO9bWCIB079jSmxWCH3lkmkvCKo-yVmWJ9S0mrX~56eZHXkYQ__",
      alt: "Description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/c11e/3451/61a3b99882779105842d20dd26b105f4?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GMeeNOQeD833YnPVpuLcVLrrDfToxKaCmPlzO-OMtx8hBOnfLYlajQmgjchtuHCs~3J1YPW8yxrFOm8zoDfCGxz0NLrZPHkjSeHnYOOLHqgrVi~GZUzjBF1ovDX4hg0w8rE0lrTQynAuDNkq7Vqc2gkvxm9aFdALug4-~1UTLaBPgvMGSd6VoiO41KVNY6S0J4I4pnY4PVRsYdW96jdTXVv~7wvsKSoQxbZbHohvAyn04Jjyb-atDOx5aAdauUrVK-SAxKOl4JVRPR3LkvlpPDStqJw2qgkDIvIidIMqfEEgXokAX3wcGW-EKa1rT6itQy78QwqKXuhISsxGFAn~Lw__",
      alt: "Description",
    },
  ];

  const images2 = [
    {
      src: "https://s3-alpha-sig.figma.com/img/24ba/eb3d/49c149077e65e33a96fb00f428230432?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lAjMx4wVaktRyBrMhAh3my-UIXG~mwPyRV6HMlq8k9BMRpNElCHGThmFWqdHyILE-WBUbsAzsSDdg6JCyK2CQkiBlifzhWkWpOJ56SzEj-Be3aDhDwSGEMIg-wB3jcsQX0TxkPixuQSSKLBN00iSMZfFvwCY5C1yWzENfLq8afjgffMe~UK4Ek-b4ZRGBmYsFnGgfDF4PqfLw15Slj5hsmcOvZsiEaXYWFn6fKlrJGxU10GqRMnW35EsarO3v3GvapSbdJ7ow8FOonSQRRvgHJYbspkW~KSwyub7xuGJjNDztJK2HDgTDcgVTxcl-AM7LFJ9t9M~IA~gJWmORN1VEw__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/251d/2fdb/537abdd9e098d432d20e7e633d4c2b73?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D3yfW5TkdyCdFiUaIWRG6GhZH8M61~Ad032pwW1EgDiHpIUDBRi03Gi94u29LiH57PoExgxVWkSolJ6iQNk7TQn2r0zIFfR-471fKvJqpNcgS9UmQTKUy2Fe1EAb8~FEmCyG361knnLUJIC30sLZ~UsAOc-fGxN4lKsTUbZ2cbAJ4IZ9TeBeH-oXXL5ncFyHAupj7ZZi5ibJp72CZcON2YnlDAV0ddPJSPjiMBF9mEff9CeFPET4Po9ZxAB8Xs82qCzEGNaI7GlI60dE3EaaojzAuWuIYiYZDAoP1IYGu6OefMWLnGHSv-Bjw-rDa5klT-4vnuFHWvtMyfoNPWn4VA__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/5e52/ced2/071eff545d1b16dd4bc36fd771859d9d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uOr5b75eukdK-OmgREU9-UI8eV7IJbmNKu6~YhWQ4wTET1J4CYGyw18IUrqsQD5hPRlAn4Z49XeJGpv5AtpgIVPz6X32Z2KNg8osdJIboq9ewoLsJ2MXKh8nOA8gUL1TsKxaq1oQ0l5CrzDAAJBbLCusiM~jm59Zdms~u~8zU9vMrsOMJ9Aih7z2~G-HUTdRxQlLQkV7XVeiNC6Qw954vEHzu0XGN0~D~yMMNJgc6bO9HuxizbH6q8nVkjpbvZRS-TnwJd9HYDqhX2y-I18aPePMDGOztKqdrtSYNdgoa8motJQhbQ5T0qy2f9U7PJH5Ce0ZiLr6DFyyhWAAyIhiyQ__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/c2c3/8cac/5270c8133fe9fbba80ef684203daf896?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ly4MAWE8a4kbZOAGPw2lfj-LkdmbP85bYmolBwNhDoHC8tIT86wbr9~eNz~NRH0VxSbXKeyF8jYSxtnPfKO7nfpGcjFcCVMCJqEanyutHJbS2O6uasFrdPWNxfi9oteGEHs9pgKdC9oBmJJs6HJeKoIpEXm4XXgEEBMi5x5tZS1g3k1YuFAoDorlZNRkTM1~egd7~g00qt9sCkfRMjuxqNXuHoK-59efaB7lnkjTVCuCvtVv2NsgRLiusON9QIXFJA-xavFeSzRnGUmK48-ugv1UO69ET-j9zMEFlF81oYd4CVp8PihzVqrCqkDtnwjdYWxGszltfmQphN6ZvZKG0g__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/efdb/cec2/a35932c0e5b21dfbfb30629b08803e12?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UEBL1Lyc68LGzCFY8JUPpmNsuC5d7nscyfHzpPiNbN9oLHul9B6I8MKW2S-ykSn2iMXUqx3GX77VRkH9Sj~XMFKpD~eXs4RPoQOK8evGomJVN6cKkhMn-hHSwOqRT-zYcufPwayRv219wvd74wmJrhsXB2dcBLWJJwj1GaDDAYBdW4RT5VDWT3gk1zkwHV1TTmmcn2FqoZUBHkyZ-tI3ws0~ivcdaWP~vBvHKHk2tF8sknza-JCCWxIdyc-OuR6YD04R9sq9GaxJf7nW9YdBVyDDAhxZDeti1-58SwsZ3ZOGVIerc~cZVAD-kUSYfFimJ2qJ0i5NL6pd8tengnS6DQ__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/fc87/170d/90c406720a69ef576defbab016788d2f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jL1six4Ody6xiotZ1ZLnxC0E-ScmvDrNZvR9pAjdp~Ms5TJ3Baew3Qup5AAoXmbfnxZyQ3C1aDh98ygFV46liu4p5RoXQMX~FIzXQuBIkbGYx3YDZc705~JzM4L8UWkIfNk8njU-aGwL15-tOjLfZ1sanaY-tAT-AzR4X9ocs149Nerb6MzVeBzSZpcKAQZXn8ldyrQwn1JWlOZTFRsiX5l6w4os1omqSvdDboEewGNRE0aEtOxKmlRVgEJ4LHU9wtiBZFQFGkcaJ5Jd1Z0r10gQk~C5PC1FBWS1X7kL9NpIB~Vi~zi2dlrZHYZRzw~WH8ydH1TxgXOEXZ2LluiTRg__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/7f97/05cf/efd22d0a9bd512eb96d8b30fd398822a?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FHyoswzOnEw0cppRjTNFZiHgK3vbM4Xxcjv3b6UgS7EiI70f7cdnp6ipFQAir-gFCEaMhCWoZLBm95Jr-tOJDUUUlq7ATUGZx4J6XBfSS-IOKnkgKL3olol2i80Ijs0XCoOo3UIg4tsR3yiVCMZLYGErCkRb1ixcVM53qQURJUHD3z3p2tAH1F9RIidWJUjIl9gfuLHEiIa8mXV~bW7lr6nHcT~elO-y6PtB-ycs6iBIus3d9Jil1bB7C0em3oIS5xHHJGJtBDY6sFUeaX3EzRiCLOhg5hlKscsjf6~WnUWE3-F2n2Gn5R7TO3-B67Ywl~t-YfvYI3MwR~ljKoUfVA__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/45cc/6e79/677858ce7ddeaf45db374c0f14abedc9?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QrSmbMwYTCAg7Y0ECeCx~DBeK2x5tFOz0nSqJZjZgElpcA9Oz7Yh0dQHjpSg1EIg~tLM4lMXJ6VMOoaaGQMFDyWC7Z6nG7WM8My5UxJAH~FXFRpQ25Nbumw3eKaF8UR4UYHHzYzekKnjwiOJANwfqh2B~yIvQD956Jy4Qm1Yxy90hJFjYF23dGoJfoN3rIIgnE~UHJQJG5FipjPWJymLCfLyQiR6GD8MLGWEIa5XJ2-zjhUN~RdDmTpj9-uf2UjwVAyrGxxRfIdYzm9jmMuC4IXSXujz534bbtBNllql0VZU5SseWPJf~hkWClu-i9Vu9~f7TEaQctWYtt~HfovJBA__",
      alt: "Description",
    },
  ];

  return (
    <>
      <Banner />
      <Header />
      <section>
        <div className="hero">
          <HeroSection />
          <div className="container section-heading-wrapper">
            {GalleryItems.map((items, index) => (
              <HeroHeadings
                key={index}
                title={items.title}
                name={items.name}
                image={items.image}
                substitle={items.subtitle}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="container">
        <div className="cta-section">
          <Button label="Open Instagram" style="primary" />
        </div>
      </div>
      <section className="gallery-section">
        <div className="container">
          <div className="gallery">
            <div className="gallery-items1">
              {images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
            <div className="gallery-items2">
              {images1.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
            <div className="gallery-items3">
              {images2.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
