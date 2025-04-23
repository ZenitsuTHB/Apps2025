
#include "Warlock.hpp"

Warlock::Warlock(STDSTR name, STDSTR title) : _name(name)
{
	COUT << getName() << ": This looks like another boring day.\n";
	setTitle(title);
}

const STDSTR & Warlock::getName() const
{
	return _name;
}

const  STDSTR & Warlock::getTitle() const
{
	return _title;
}

void Warlock::setTitle(const STDSTR& title)
{
	_title = title;
}

void Warlock::introduce() const
{
	COUT << this->getName() << ": I am " << this->getName() << ", " << this->getTitle() << "!\n";
}

Warlock::~Warlock()
{
	COUT << this->getName() << ": My job here is done!\n";
}
