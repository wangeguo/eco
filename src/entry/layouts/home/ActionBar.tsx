import clsx from 'clsx';
import { getRelativeLocaleUrl } from 'astro:i18n';

import { getCurrentLocale } from '@/utils';
import { Button, Link } from '@/components/react';
import { ArrowRight } from '@/components/icon';

import type { HomeLocale } from './typing';

type ActionBarProps = {
  className?: string;
  locale: HomeLocale;
};

function ActionBar({ className, locale }: ActionBarProps) {
  const getLocaleUrl = getRelativeLocaleUrl.bind(null, getCurrentLocale());

  return (
    <div className={clsx('flex flex-col sm:flex-row gap-4 w-full sm:w-auto', className)}>
      <Button
        as={Link}
        href={getLocaleUrl('/guides/')}
        size="lg"
        color="primary"
        variant="solid"
        endContent={<ArrowRight className="size-5" />}
      >
        {locale.getStarted}
      </Button>
      <Button
        as={Link}
        href={getLocaleUrl('/guides/how-to-contribute/')}
        size="lg"
        color="primary"
        variant="bordered"
      >
        {locale.contribute}
      </Button>
      {/* <Button
        as={Link}
        href={getLocaleUrl('/guides/how-to-join/')}
        size="lg"
        color="primary"
        variant="bordered"
      >
        {locale.join}
      </Button> */}
    </div>
  );
}

export default ActionBar;
