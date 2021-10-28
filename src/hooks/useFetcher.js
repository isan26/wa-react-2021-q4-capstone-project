import { useState, useEffect } from 'react';
import { API_BASE_URL } from 'constants/urls';
import { useLatestAPI } from './useLatestsAPI';

export function useFetcher({
    query,
    lang = 'en-us',
    pageSize = 10,
}) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [data, setData] = useState(() => ({
        data: {},
        isLoading: true,
    }));

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
            return () => { };
        }

        const controller = new AbortController();

        async function getData() {
            try {
                setData({ data: {}, isLoading: true });

                console.log(`${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(query)}&lang=${lang}&pageSize=${pageSize}`);

                const response = await fetch(
                    `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(query)}&lang=${lang}&pageSize=${pageSize}`,
                    { signal: controller.signal, }
                );
                const data = await response.json();

                setData({ data, isLoading: false });
            } catch (err) {
                setData({ data: {}, isLoading: false });
                console.error(err);
            }
        }

        getData();

        return () => {
            controller.abort();
        };
    }, [apiRef, isApiMetadataLoading]);

    return data;
}
