import { Tag } from '@/components/DataDisplay/Tag';
import { Modal } from '@/components/Feedback';
import { CameraIcon, SendIcon, Typography } from '@/components/General';
import { TDauKhachDatLich } from '.';

type TModalAppointment = {
  show?: boolean;
  onCancel?: () => void;
  items: TDauKhachDatLich;
};

export const ModalGuestAppointment = ({ show, onCancel, items }: TModalAppointment) => {
  return (
    <Modal
      open={show}
      onCancel={onCancel}
      title="LỊCH HẸN DẪN KHÁCH"
      className="mb-0 w-[560px] !p-5"
    >
      <div className=" h-[calc(var(--window-height)_-_60px)] md:h-[calc(var(--window-height)_-_110px)] flex flex-col relative">
        <div className="px-3 pt-3 space-y-2">
          <div className="flex justify-between">
            <a href="/user/4420" target="_blank" className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                <img alt="dffasdfdsdf" src={items.avatar} className="object-cover w-full h-full" />
              </div>
              <Typography variant="span" className="text-sm font-semibold">
                {items.name}
              </Typography>
            </a>
            <Tag className="border-[#FBBD23] border text-[#FBBD23] bg-[#FFF2D1] text-xs px-2.5 py-[2px] h-6 cursor-pointer">
              Chờ xác nhận
            </Tag>
          </div>
          <div>
            <Typography variant="span" className="text-sm">
              Vào lúc:{' '}
            </Typography>
            <Typography variant="span" className="text-sm font-semibold">
              {items.time}
            </Typography>
          </div>
          <div>
            <Typography variant="span" className="text-sm">
              Tại địa chỉ:{' '}
            </Typography>
            <Typography variant="span" className="text-sm font-semibold">
              {items.address} Mô tả:{' '}
              {items?.desc?.map((c, index) => (
                <span key={`mo_ta_${index}`}>
                  <a href={c} className="text-infoLight">
                    #{c}
                  </a>
                  {items && items.desc && index < items.desc.length - 1 ? <span>, </span> : ''}
                </span>
              ))}
            </Typography>
          </div>
          <div>
            <Typography variant="span" className="text-sm">
              Ghi chú:{' '}
            </Typography>
            <Typography variant="span" className="text-sm font-semibold">
              {items.note}
            </Typography>
          </div>
        </div>
        <div className="my-3 border-b"></div>
        <div className="px-3 py-2 overflow-auto min-h-[380px] flex flex-end">
          <div className="flex flex-col items-center justify-end flex-1 gap-5">
            <div>
              <svg
                width="150"
                height="120"
                viewBox="0 0 184 152"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <g transform="translate(24 31.67)">
                    <ellipse
                      fillOpacity=".8"
                      fill="#F5F5F7"
                      cx="67.797"
                      cy="106.89"
                      rx="67.797"
                      ry="12.668"
                    ></ellipse>
                    <path
                      d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                      fill="#AEB8C2"
                    ></path>
                    <path
                      d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
                      fill="url(#linearGradient-1)"
                      transform="translate(13.56)"
                    ></path>
                    <path
                      d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                      fill="#F5F5F7"
                    ></path>
                    <path
                      d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                      fill="#DCE0E6"
                    ></path>
                  </g>
                  <path
                    d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
                    fill="#DCE0E6"
                  ></path>
                  <g transform="translate(149.65 15.383)" fill="#FFF">
                    <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815"></ellipse>
                    <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="text-sm">Không có kết quả nào trên hệ thống!</div>
          </div>
        </div>
        <div className="flex items-center px-3 py-2 space-x-2">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
            <img
              alt="dffasdfdsdf"
              src="https://assets-cdn.khonhapho.com/test/2024_05_02/ngokhong-toy-1714731801769.jpeg?quality=70&amp;auto_optimize=high&amp;height=50&amp;width=50"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-2.5 py-2 m-0 w-full rounded-xl flex flex-col justify-center gap-1 bg-gray-100 h-[78px]">
            <div className="flex items-center justify-between flex-1 w-full rounded-xl">
              <input
                type="text"
                placeholder="Nhắn tin"
                className="flex-1 bg-transparent outline-none"
              />
              <button type="submit" className="flex items-center justify-center">
                <SendIcon />
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center ant-btn css-h2e6id ant-btn-text ant-btn-icon-only"
                >
                  <CameraIcon width="20" height="20" />
                </button>
                <input
                  accept="image/*, image/heic, image/heif"
                  className="invisible hidden w-0 h-0"
                  type="file"
                />
                <button
                  type="button"
                  className="flex items-center justify-center ant-btn css-h2e6id ant-btn-text ant-btn-icon-only"
                >
                  <CameraIcon width="20" height="20" />
                </button>
                <div>
                  <button
                    type="button"
                    className="flex items-center justify-center ant-btn css-h2e6id ant-btn-text ant-btn-icon-only"
                  >
                    <CameraIcon width="20" height="20" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
