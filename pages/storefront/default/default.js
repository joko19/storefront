import React from 'react';
import Header from './../../../components/Header/Header'
import Slider from './../../../components/Slider/SliderCarousel'
import Swiper from 'react-id-swiper';
import Head from 'next/head'
import SimpleCard from '../../../components/Card/SimpleCard';
import Button from './../../../components/Button/Button'

function Default(props) {
  console.log(props.data)
  return (
    <div>
      <Header nameStore={props.data.nameStore} />
      {/* <Slider/> */}
      {/* Pulsa */}
      <section className="md:p-12 p-2">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-purple-900 text-l">Beli Pulsa tidak perlu repot!</h2>
            <p>Penjualan Pulsa Terlengkap Hanya di {props.data.nameStore}</p>
          </div>
          <div className="hidden md:grid">
            <Button name="Selengkapnya" className="justify-self-end" />
          </div>
        </div>
        <div className="w-screen md:w-full grid md:grid-cols-4 grid-cols-2 justify-center mx-auto gap-4">
          {props.data.pulsa.map((item) => (
            <SimpleCard cover={item.logo} title={item.nameProvider} />
          ))}
        </div>
        <div className="md:hidden mt-4">
          <Button name="Selengkapnya" className="m-8" />
        </div>
      </section>

      {/* Voucher Game */}
      <section className="md:p-16 p-2 w-screen" style={{ backgroundColor: '#FFF2EB' }}>
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-2xl" style={{ color: '#FC732F' }}>Topup Secepat Kilat!</h2>
          </div>
          <div className="hidden md:grid">
            <Button name="Lihat Lainnya Disini" className="justify-self-end" />
          </div>
        </div>
        <p>Berikut list game favorit yang tersedia di {props.data.nameStore}</p>
        <div className="w-full md:w-full lg:w-full grid md:grid-cols-4 grid-cols-2 justify-center gap-4 mt-4">
          {props.data.game.map((item) => (
            <SimpleCard cover={item.logo} title={item.game} subtitle={item.company} />
          ))}
        </div>
        <div className="md:hidden mt-4">
          <Button name="Selengkapnya" className="m-8" />
        </div>
      </section>

      {/* Method Payment  */}
      <section>
        <h2 className="font-bold text-2xl text-center mt-32" style={{ color: '#494276' }}>Metode Pembayaran yang mudah</h2>
        <p className="text-center text-gray-500">Runshop memberikan kemudahan dalam proses transaksi anda</p>
        <div className="flex gap-4 justify-center ">
          <img className="h-20 " src="https://cdn.iconscout.com/icon/free/png-512/bca-225544.png" alt="logo bca" />
          <img className="h-20 align-middle" src="https://pngimage.net/wp-content/uploads/2018/06/mandiri-icon-png-3.png" alt="logo mandiri" />
          <img className="h-8 mt-8" src="https://seeklogo.com/images/Q/quick-response-code-indonesia-standard-qris-logo-F300D5EB32-seeklogo.com.png" alt="logo QRIS" />
        </div>
      </section>
    </div>
  )
}

export default Default