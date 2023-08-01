"use client";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import AppFooter from "../components/app-components/app-footer/app-footer";
import AppLayout from "../components/app-components/app-layout";
import "../globals.css";

type LocaleLayoutType = {
  params: {
    locale: string;
  };
};

export const RootLayout: React.FC<PropsWithChildren<LocaleLayoutType>> = (
  props: PropsWithChildren<LocaleLayoutType>
) => {
  const { params, children } = props;
  const { locale } = params;

  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = (await import(`../../messages/${locale}.json`)).default;
        setMessages(res);
      } catch (error) {
        notFound();
      }
    };

    getMessages();
  }, [locale]);

  return (
    <html lang="en">
      <body>
        {!!messages && (
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="fixed bg-white w-full z-10">
              <AppLayout />
            </div>
            <div className="flex justify-center pt-32">
              <div className="container">{children}</div>
            </div>
            <AppFooter />
          </NextIntlClientProvider>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
