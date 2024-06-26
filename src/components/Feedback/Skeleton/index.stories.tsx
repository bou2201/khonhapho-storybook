import { Typography } from '@/components/General';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '.';

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    activeAnimation: true,
    width: 250,
    height: 30,
  },
  argTypes: {
    activeAnimation: {
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    children: {
      table: {
        type: {
          summary: 'string | Node',
        },
      },
      control: {
        type: 'text',
      },
    },
    width: {
      type: { name: 'number', required: true },
    },
    height: {
      type: { name: 'number', required: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};

/**
 * By default, the skeleton pulsates, but you can disable the animation by props `activeAnimation={false}`
 */
export const NoActiveAnimation: Story = {
  args: {
    activeAnimation: false,
  },
};

export const ComplexCombination: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <div className="flex justify-start items-center gap-4">
        <Skeleton width={60} height={60} className="rounded-full" />
        <div className="flex flex-col gap-3">
          <Skeleton width={150} height={25} />
          <Skeleton width={250} height={15} />
        </div>
      </div>

      <div className="flex justify-start items-center gap-4">
        <img
          width={60}
          height={60}
          className="rounded-full"
          src="https://github.com/shadcn.png"
          alt=""
        />
        <div className="flex flex-col gap-1">
          <Typography variant="h4">Name Example</Typography>
          <Typography variant="span" className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </div>
      </div>
    </div>
  ),
};

export const SkeletonWithChildren: Story = {
  render: () => (
    <div className="flex gap-5">
      <Skeleton width={60} height={60} className="rounded-full">
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4143 11.9312C13.1196 11.2331 12.6919 10.5989 12.155 10.0641C11.6197 9.52767 10.9856 9.10001 10.2878 8.80469C10.2815 8.80156 10.2753 8.8 10.269 8.79688C11.2425 8.09375 11.8753 6.94844 11.8753 5.65625C11.8753 3.51562 10.1409 1.78125 8.00028 1.78125C5.85965 1.78125 4.12528 3.51562 4.12528 5.65625C4.12528 6.94844 4.75809 8.09375 5.73153 8.79844C5.72528 8.80156 5.71903 8.80312 5.71278 8.80625C5.01278 9.10156 4.38465 9.525 3.84559 10.0656C3.3092 10.6009 2.88153 11.235 2.58621 11.9328C2.29609 12.616 2.13962 13.3485 2.12528 14.0906C2.12486 14.1073 2.12778 14.1239 2.13388 14.1394C2.13997 14.1549 2.14911 14.1691 2.16076 14.181C2.17241 14.193 2.18633 14.2025 2.20171 14.2089C2.21708 14.2154 2.23359 14.2188 2.25028 14.2188H3.18778C3.25653 14.2188 3.31121 14.1641 3.31278 14.0969C3.34403 12.8906 3.8284 11.7609 4.68465 10.9047C5.57059 10.0188 6.74715 9.53125 8.00028 9.53125C9.2534 9.53125 10.43 10.0188 11.3159 10.9047C12.1722 11.7609 12.6565 12.8906 12.6878 14.0969C12.6893 14.1656 12.744 14.2188 12.8128 14.2188H13.7503C13.767 14.2188 13.7835 14.2154 13.7988 14.2089C13.8142 14.2025 13.8281 14.193 13.8398 14.181C13.8514 14.1691 13.8606 14.1549 13.8667 14.1394C13.8728 14.1239 13.8757 14.1073 13.8753 14.0906C13.8597 13.3438 13.705 12.6172 13.4143 11.9312ZM8.00028 8.34375C7.28309 8.34375 6.60809 8.06406 6.10028 7.55625C5.59246 7.04844 5.31278 6.37344 5.31278 5.65625C5.31278 4.93906 5.59246 4.26406 6.10028 3.75625C6.60809 3.24844 7.28309 2.96875 8.00028 2.96875C8.71746 2.96875 9.39246 3.24844 9.90028 3.75625C10.4081 4.26406 10.6878 4.93906 10.6878 5.65625C10.6878 6.37344 10.4081 7.04844 9.90028 7.55625C9.39246 8.06406 8.71746 8.34375 8.00028 8.34375Z"
            fill="#0E181C"
            fillOpacity="0.8"
          />
        </svg>
      </Skeleton>

      <Skeleton width={100} height={100} className="border">
        <svg width={32} height={32} viewBox="0 0 1098 1024" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z"
            fillOpacity={0.8}
          ></path>
        </svg>
      </Skeleton>

      <Skeleton width={100} height={100} className="border">
        <svg viewBox="64 64 896 896" width={32} height={32} fill="currentColor" aria-hidden="true">
          <path
            d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"
            fillOpacity={0.8}
          ></path>
        </svg>
      </Skeleton>
    </div>
  ),
};
