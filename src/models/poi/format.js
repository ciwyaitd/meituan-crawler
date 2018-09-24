'use strict'

function format (poi) {
  const result = {
    phone: poi.phone,
    latest_week_coupou: poi.latestWeekCoupon,
    city_id: poi.cityId,
    addr: poi.addr,
    brand_name: poi.brandName,
    brand_id: poi.brandId,
    poi_id: Number(poi.poiid),
    group_info: poi.groupInfo,
    show_type: poi.showType,
    is_snack: poi.isSnack,
    discount: poi.discount,
    history_coupon_count: poi.historyCouponCount,
    avg_price: poi.avgPrice,
    avg_score: poi.avgScore,
    lowest_price: poi.lowestPrice,
    introduction: poi.introduction,
    mark_numbers: poi.markNumbers,
    area_id: poi.areaId,
    subway_station_id: poi.subwayStationId,
    preferent: poi.preferent,
    is_support_appointment: poi.isSupportAppointment,
    reference_price: poi.referencePrice,
    style: poi.style,
    feature_menus: poi.featureMenus,
    name: poi.name,
    lng: poi.lng,
    lat: poi.lat,
    is_waimai: Boolean(poi.isWaimai),
    is_hot: Boolean(poi.isHot),
    mall_id: poi.mallId,
    has_group: poi.hasGroup,
    cates: poi.cates,
    wifi: poi.wifi,
    allow_refund: Boolean(poi.allow_refund),
    area_name: poi.areaName,
    open_info: poi.openInfo,
    cate_name: poi.cateName
  }

  return result
}

module.exports = format
