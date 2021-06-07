import React, { useEffect } from 'react';
import useSuggestions from '../../state/suggestion/hooks/useSuggestions';
import { getRelativeTimeFromDate, convertDate } from '../../utils/date';
import ChatIcon from '../../assets/chat-icon.svg';
import Spinner from '../../components/spinner';
import Button from '../../components/button';
import {
  Container,
  Heading,
  HeadingContainerSpaceBetween,
  SuggestionFeed,
  SuggestionFeedIcon,
  SuggestionFeedItem,
  SuggestionForm,
  SuggestionNotFound,
} from './components';

const Home = () => {
  const [suggestion, getSuggestions, submitSuggestion, isLoading, error] = useSuggestions();
  const hasSuggestions = suggestion?.results?.length > 0;

  const handleSubmit = async (values, actions) => {
    await submitSuggestion(values);

    actions.resetForm();
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <>
      <Spinner show={isLoading} />
      <Container>
        <div className="section">
          <Heading>Make a Suggestion</Heading>
          <SuggestionForm onSubmit={handleSubmit}/>
        </div>
        <HeadingContainerSpaceBetween>
          <Heading>Suggestion Feed</Heading>
          <Button type="submit" onClick={getSuggestions}>
            Refresh
          </Button>
        </HeadingContainerSpaceBetween>
        {hasSuggestions ?         
          <SuggestionFeed>
            {suggestion?.results?.map((s) => 
            (
              <SuggestionFeedItem key={s.id} data-date={getRelativeTimeFromDate(s.createdAt)}>
                <SuggestionFeedIcon src={ChatIcon} alt="Chat Icon" />
                <section>
                  <div className="title">{s.title}</div>
                  <div className="description">{s.description}</div>
                  <div className="footer">
                    Suggested by <span className="bold">{s.user.name}</span> on {convertDate(s.createdAt)}
                  </div>
                </section>
              </SuggestionFeedItem>
            ))}
          </SuggestionFeed> : <SuggestionNotFound>No suggestions found.</SuggestionNotFound>
        }

        {/* Below is used to help preview JSON object values in browser */}
        {/* <pre>{JSON.stringify(suggestion, null, 2)}</pre> */}

      </Container>
    </>
  );
};

export default Home;
